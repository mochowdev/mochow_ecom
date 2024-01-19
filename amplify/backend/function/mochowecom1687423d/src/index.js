
/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const server = awsServerlessExpress.createServer(app);

/*
exports.handler = async (event,context) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    awsServerlessExpress.proxy(server,event,context);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};

*/

exports.handler = async (event) => {
    console.log("Request event: ", event);
  
    let responseMessage = '';
    switch (event.httpMethod) {
      case 'GET':
        responseMessage = 'This is a GET request';
        break;
      case 'DELETE':
        responseMessage = 'This is a DELETE request';
        break;
      case 'HEAD':
        // Usually, HEAD requests don't have a response body
        return {
          statusCode: 200,
          headers: {
            "Content-Type": "text/plain"
          },
          body: ''
        };
      default:
        responseMessage = 'HTTP method not supported';
    }
  
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify({ message: responseMessage })
    };
  };