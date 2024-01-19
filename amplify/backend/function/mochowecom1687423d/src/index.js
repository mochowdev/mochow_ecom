/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');
const server = awsServerlessExpress.createServer(app);

exports.handler = async (event, context) => {
    console.log("Request event: ", event);

    // Pass the event and context to the server
    const response = await awsServerlessExpress.proxy(server, event, context);

    return response;
};
