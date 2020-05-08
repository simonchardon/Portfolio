const http = require('http');
const express = require('express')
const app = express();
const fs = require('fs');
const path = require('path');
const mailer = require('./mailer.js');
const bodyParser = require('body-parser')

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || '8000');
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

// const options = {
//   key: fs.readFileSync('./server.key'),
//   cert: fs.readFileSync('./server.cert')
// };

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

app.use(express.static(path.join(__dirname, 'assets')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'public/index.html'));
});

app.get('/connaisance', (req, res) => {
  res.sendFile(path.join(__dirname,'public/connaisance.html'));
});

app.get('/projet', (req, res) => {
  res.sendFile(path.join(__dirname,'public/projet.html'));
});

app.get('/formation', (req, res) => {
  res.sendFile(path.join(__dirname,'public/formation.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname,'public/contact.html'));
});

app.post('/mail' , (req, res) => {
  // mailer.main();
  console.log(req.body);
  res.send(status(200))
})



server.listen(port);

