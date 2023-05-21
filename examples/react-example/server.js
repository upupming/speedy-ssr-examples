// @ts-check
const { createServer } = require('@speedy-js/universal');
const express = require('express');
const detectPort = require('detect-port');

const isDev = process.env.NODE_ENV !== 'production';

const server = createServer({
  dev: isDev,
});

const universalHandler = server.getRequestHandler();

server.prepare().then(async () => {
  const port = await detectPort(3000);
  express()
    .use(universalHandler)
    .listen(port, () => {
      console.log(`The server is listening at http://localhost:${port}`);
    });
});
