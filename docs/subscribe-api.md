---
id: subscribe
title: Subscribe API (Beta)
sidebar_label: Request Parameters 
slug: /subscribe-api/
---

:::note In Beta Phase
This feature is in the Beta phase. If you have any questions, ideas or suggestions please reach out to us at devrelations@symbl.ai.
:::

The Subscribe API allows you to connect to a conversation or a meeting in listen-only mode. 

Using this API, you can allow users to subscribe to webinars or conferences where there are only a handful of speakers and most participants are only listening in. 

While users connected on websocket are charged per user, the listen-only participants can stream the transcription and insight services at no cost. 

This can be turned on or off for a conversation, on demand. 

:::info
The Subscribe APIs does not have a limit to the number of participants that can join. You can seamlessly add up to 10,000 participants. 
:::

### API Endpoint

`wss://api.symbl.ai/v1/subscribe/{connectionId}?access_token={accessToken}`

This is a WebSocket endpoint that lets you subscribe to all the real-time updates. Often, this URL is auto-generated by services such as the inbound-stream-integration.


Parameter | Required  | Value
--------- | ---------- | ------ 
`connectionId` | Mandatory | The same `connectionId` that is generated with the Streaming API can be used to subscribe to this API.  
`accessToken` | Mandatory | The Symbl's Authentication token you get from the [Authentication process](/docs/developer-tools/authentication/).

### Request Body

``` js
const WebSocket = require('ws');​
const accessToken = "<Your Token>";
const connectionId = "<Your connectionId>";
const symblEndpoint = `wss://api.symbl.ai/v1/subscribe/${connectionId}?access_token=${accessToken}`;

const ws = new WebSocket(symblEndpoint);

// Fired when a message is received from the WebSocket server
ws.onmessage = (event) => {
    // You can find the conversationId in event.message.data.conversationId;
    const data = JSON.parse(event.data);
    if (data.type === 'message' && data.message.hasOwnProperty('data')) {
        console.log('conversationId', data.message.data.conversationId);
    }
    if (data.type === 'message_response') {
        for (let message of data.messages) {
            console.log('Transcript (more accurate): ', message.payload.content);
        }
    }
    if (data.type === 'topic_response') {
        for (let topic of data.topics) {
            console.log('Topic detected: ', topic.phrases)
        }
    }
    if (data.type === 'insight_response') {
        for (let insight of data.insights) {
            console.log('Insight detected: ', insight.payload.content);
        }
    }
    if (data.type === 'message' && data.message.hasOwnProperty('punctuated')) {
        console.log('Live transcript (less accurate): ', data.message.punctuated.transcript)
    }
    console.log(`Response type: ${data.type}. Object: `, data);
};

// Fired when the WebSocket closes unexpectedly due to an error or lost connection
ws.onerror = (err) => {
    console.error(err);
};

// Fired when the WebSocket connection has been closed
ws.onclose = (event) => {
    console.info('Connection to websocket closed');
};

```
### Response Body 

Example of the `message_response` object:

```json
{
  "type": "message_response",
  "messages": [
    {
      "from": {
        "name": "Jane",
        "userId": "jane.doe@example.com"
      },
      "payload": {
        "content": "I was very impressed by your profile, and I am excited to know more about you.",
        "contentType": "text/plain"
      }
    },
    {
      "from": {
        "name": "Jane",
        "userId": "jane.doe@example.com"
      },
      "payload": {
        "content": "So tell me, what is the most important quality that you acquired over all of your professional career?",
        "contentType": "text/plain"
      }
    }
  ]
}
```
Example of the `insight_response` object:

```json
{
  "type": "insight_response",
  "insights": [
    {
      "type": "question",
      "text": "So tell me, what is the most important quality that you acquired over all of your professional career?",
      "confidence": 0.9997962117195129,
      "hints": [],
      "tags": []
    },
    {
      "type": "action_item",
      "text": "Jane will look into the requirements on the hiring for coming financial year.",
      "confidence": 0.9972074778643447,
      "hints": [],
      "tags": [
        {
          "type": "person",
          "text": "Jane",
          "beginOffset": 0,
          "value": {
            "value": {
              "name": "Jane",
              "alias": "Jane",
              "userId": "jane.doe@example.com"
            }
          }
        }
      ]
    }
  ]
}
```