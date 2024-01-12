const awsServerlessExpress = require('aws-serverless-express');
const app = require('../../../api/friendleyApi1/src/app');
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};