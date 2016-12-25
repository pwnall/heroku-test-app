/** A minimal node.js server that generates hard-coded HTTP responses.
 *
 * This server does not rely on the node modules in package.json. It is intended
 * to test creating and uploading bare slugs to Heroku, and is inspired from
 * their documentation at
 * https://devcenter.heroku.com/articles/platform-api-deploying-slugs#node-js
 *
 * Start the server using one of the following commands:
 * PORT=3000 node minimal.js
 * PORT=3000 npm run minimal
 */

const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('heroku-test-app OK\n');
});

// Heroku applications have to bind to a TCP port indicated in the environment.
const port = process.env.PORT;
server.listen(port);

// Output a start statement for debugging.
console.log('heroku-test-app listening on port ' + port);
