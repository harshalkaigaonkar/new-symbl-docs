---
id: api-getting-started
title: Symbl APIs
sidebar_label: Introduction
slug: /api-reference/getting-started/
active: APIs
---
---
 
## Introduction
Symbl APIs are built around [RESTful](http://en.wikipedia.org/wiki/Representational_State_Transfer) interface (except for the Streaming API which is based on [WebSocket protocol](/docs/concepts/websockets)) and are served over secure HTTPS protocol. 
 
Our REST APIs support all HTTP verbs (or methods, as they are referred to in REST APIs): POST, GET, PUT, and DELETE.
 
Symbl provides a suite of APIs for different usecases. Some of them are listed below: <br/>
 
&nbsp; &nbsp; 👉 &nbsp; [Async APIs](/docs/async-api/introduction) allow you to send text, audio or video conversations in recorded format. <br/>
&nbsp; &nbsp; 👉 &nbsp; [Streaming APIs](/docs/streamingapi/introduction) allow you to connect Symbl on a live call via WebSocket protocol.<br/>
&nbsp; &nbsp; 👉 &nbsp; [Telephony APIs](/docs/telephony/introduction) allow you to connect Symbl on an live audio conversation via SIP and PSTN.<br/>
&nbsp; &nbsp; 👉 &nbsp; [Conversation API](/docs/conversation-api/introduction) allows you to get Conversation Intelligence such as Sentiment Analysis, Action Items, Topics, Trackers, Summary and more. <br/>
 
 
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/13497402-108cafc3-da45-4b00-97fe-4819894f58bb?action=collection%2Ffork&collection-url=entityId%3D13497402-108cafc3-da45-4b00-97fe-4819894f58bb%26entityType%3Dcollection%26workspaceId%3D5f563cfe-42ef-4344-a98a-eae13183fb7c)
 
---
### Base URL
All our APIs use the base URL as given below for all our services:
 
```shell
https://api.symbl.ai/v1/
```
 
:::note Labs URL
if you are accessing our [Labs](/docs/labs) feature, you must use the base URL `https://api-labs.symbl.ai`.
:::
 
---
### Endpoints
 
Given below is a list of API endpoints and their corresponding services:
 
| Endpoint  | Description | Supported APIs |
---------- | ------- |  ----- |
`/v1/process` | Processes text, audio, and video data.  | [Async Text API](/docs/async-api/reference/reference) <br/> [Streaming APIs](/docs/streamingapi/introduction) <br/> [Telephony APIs](/docs/telephony/introduction)
`/v1/conversations` | Returns the conversation object that provides Conversation Intelligence like Topics, Action Items, Questions, etc. | [Conversation API](/docs/conversation-api/introduction)
`/v1/job` | Returns the status of the ongoing job request. Read more about `jobId` below. | [Job API](/docs/async-api/overview/jobs-api)
`/v1/endpoint:connect` | Connects Symbl via Telephony APIs over PSTN or SIP protocols. | [Telephony API](/docs/telephony-api/api-reference#endpoint)
`/v1/manage`  <font color="orange"> BETA</font> | Accessing and managing various resources against your Symbl account. | [Management API](/docs/management-api/introduction) <br/> [Trackers via Management API](/docs/management-api/trackers/overview)
 
---
### API Parameters
 
We provide a host of mandatory and optional parameters that add robust insights to your Conversation Intelligence. For example, the optional parameter `sentiment=true` passed as a query param in the Conversation API (for transcripts or topics) provide sentiment analysis.
 
To standardize the structure of the requests, we allow parameters to be sent differently for different APIs.
 
Here's a list of how each of the APIs accept API parameters:
 
| API  | In Request Body | As Query Param |
---------- | ------- | ----- |
Async Text API | ✅ | ✅
Async Audio File API | | ✅
Async Audio URL API | ✅ |
Async Video File API | | ✅
Async Video URL API | ✅ | |
Conversation API <br/>(for Sentiment, verbose, etc.) | | ✅
 
---
### Request and Response Format
 
Symbl APIs use standard HTTPS requests and responses. Our responses are returned in the standard [JSON](https://www.json.org/json-en.html) format.
 
For Transcript generation, we return a formatted transcript in [Markdown](/docs/conversation-api/transcript/#create-transcript-in-markdown) and [SRT](/docs/conversation-api/transcript/#create-transcript-in-srt) format.

 

