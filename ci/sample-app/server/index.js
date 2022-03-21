'use strict';

/**
 * INITIALIZE DEFAULTS (package independent)
 */
const INSTANCE_URL = 'http://localhost';
const HOSTNAME = 'localhost';
const PORT = parseInt(process.env.PORT || '3000', 10);
const ISDEV = process.env.NODE_ENV !== 'production';

/**
 * LOAD DEPENDENCIES (in required order)
 */
const next = require('next');
const express = require('express');
// const path = require('path');

/**
 * CONFIGURE FRAMEWORKS
 */
const app = next({ dev: ISDEV, hostname: HOSTNAME, port: PORT });
// const routes = require('./src/routes');
const handle = app.getRequestHandler(app);

//=============================================================================================
//=============================================================================================
(async () => {
  /**
   * 0. INITIALIZE FRAMEWORKS
   */
  await app.prepare();
  const expressApp = express();

  /**
   * 1. EXCEPTION ROUTES ("proxy")
   */
  // expressApp.use(
  //   '/some-proxy-path',
  //   express.static(path.join(__dirname, 'some-proxy-path'))
  // );
  // expressApp.use('/public', express.static('public'));
  // expressApp.use('/src/i18n', express.static('src/i18n'));
  expressApp.get('/express-route', (req, res) => {
    res.send('THIS IS A ROUTE OUTSIDE OF NEXTJS');
  }); // TODO: move logic to './server/proxy'

  /**
   * 2. NEXTJS ROUTES (./src/routes)
   */
  expressApp.get('/p/:id', (req, res) => {
    app.render(req, res, '/posts', req.params);
  }); // TODO: move logic to './src/routes'
  expressApp.get('*', (req, res) => handle(req, res));

  /**
   * 3. PORT BIND
   */
  await expressApp.listen(PORT);
  return `[${ISDEV ? 'DEV' : 'PROD'}] Server ready on ${INSTANCE_URL}:${PORT}`;
})() // * IIFE
  .then(startMsg => console.log(startMsg)) // TODO: handle logging
  .catch() // TODO: handle logging
  .finally(); // TODO: handle logging
//================================================================================================
//================================================================================================
