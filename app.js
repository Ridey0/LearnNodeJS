const express = require('express');
const logger = require('./middleware/logger');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const courses = require('./routes/courses');
const homepage = require('./routes/homepage');
const app = express();
const startupDebugger = require('debug')('app:startup'); 
const port = process.env.PORT || 3000;

app.set('view engine', 'pug'); // Templating Dynamic Page
app.set('views', './views');

app.use('/', homepage);
app.use('./api/courses', courses); //Any route that starts with /api route use courses router
app.use(helmet());
app.use(express.json());
app.use(logger);
app.use(express.static('public'));

//Configrations

console.log('Application Name: ' + config.get('name'));
console.log('Mail Server: ' + config.get('mail.password'));

if (app.get('env') === 'development') {
  app.use(morgan('tiny'));
  startupDebugger('Morgan is enabled...');
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

