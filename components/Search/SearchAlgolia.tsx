import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';

const searchClient = algoliasearch('CSWQS54PSA', 'b1753ac30afcdfa27151da0d70617103');

const SearchAlgolia : React.ElementType = () => (
  <InstantSearch searchClient={searchClient} indexName="pages">
    <SearchBox />
  </InstantSearch>
);

export default SearchAlgolia
