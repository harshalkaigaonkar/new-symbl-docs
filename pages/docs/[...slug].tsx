import * as React from 'react';
import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import dynamic from 'next/dynamic';
import Footer from '../../components/LandingPageComponents/Footer';

const RightSidebar: any = dynamic((): any => import('../../components/RightSidebar'),{ssr:false}) ;

// errors are there to be configured
type PageProps = {
  slug: string,
  content: string,
  meta_data: any,
  lexer_data: any
}

const Page: NextPage = (props: PageProps | any) => {
 return (
  <>
  <Head>
   <title>{props.meta_data.title} | Symbl Docs</title>
   <link rel="icon" href="/img/favicon.ico" />
  </Head>

  <div className="flex flex-col scroll-smooth">
    <Header active={props.meta_data.active} />
      <main className='grow flex flex-row'>
        <Sidebar type={props.meta_data?.active} slug={props.meta_data?.slug} activeSidebarComponent={props.meta_data?.sidebar_label} pageId={props.meta_data?.id} />
          <article className='top-20 right-20 grow flex flex-col items-center justify-center'>
            <span className='w-full pl-12 pb-5 pt-5'>
            <h1 className='w-full text-left m-2 py-2 px-8 text-4xl font-bold' >{props.meta_data.title}</h1>
            </span>
            <div className='text-inherit prose-neutral prose prose-md' dangerouslySetInnerHTML={{ __html: props.content}} />
          </article>
        <RightSidebar lexer={props.lexer_data} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </>
 );
}
// storing slugs of every file to be saved in docs dir
export const allDocs: any[] = [];
// recursive function for getting the routes of every file(nested too)
const getPathsRecursiveFunction = (docs: string[], dirname: string[], fs: any) => {
  docs.map(filename => {
    if(!filename.includes(".md")) {
      let files = fs.readdirSync(path.join('docs', ...dirname, filename));
      getPathsRecursiveFunction(files, dirname.concat(filename), fs);
    } else if(filename.includes(".md")) {
      allDocs.push({
        params: {
          slug: dirname.concat(filename.replace(".md", "")),
        },
      })
    } else {
      console.log('Only Markdown Files gets Render from docs/ folder');
    }
  })
}

const renderer = {
  heading(text : string, level: number) : string {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

    return `
            <h${level} class="text-inherit">
              ${text}
              <a name="${escapedText}" class="text-inherit m-2 no-underline hover:underline" href="#${escapedText}" title="Direct link to heading">
              #
              </a>
            </h${level}>`;
  },
  link(href : string, title : string, text : string): string {
    return `<a href=${href} class="text-inherit">${text}</a>`;
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
 const docs : string[] = fs.readdirSync("docs");
 const dirname: string[] = [];
 getPathsRecursiveFunction(docs, dirname, fs);
 const paths: any[] = allDocs;
 return {
  paths,
  fallback: false
 }
};


export const getStaticProps : GetStaticProps = async (context : any) => {
 let slug : string[] = context.params.slug;
 slug[slug.length-1] = slug[slug.length-1].concat(".md");
 const markdownContentWithMetadata : string = fs.readFileSync(path.join( 'docs', ...slug)).toString();
 const parsedMarkdown : matter.GrayMatterFile<string> = matter(markdownContentWithMetadata);
 marked.setOptions({
    breaks: true,
    headerIds: true,
  });
 marked.use({ renderer })
 const markdownContent = marked.parse(parsedMarkdown.content);
 const lexer = JSON.parse(JSON.stringify(marked.lexer(parsedMarkdown.content).filter((item : any) => item.type === 'heading')));

 return {
  props: {
    slug,
    content: markdownContent,
    meta_data: parsedMarkdown.data,
    lexer_data: lexer,
  }
 };
}

export default Page;