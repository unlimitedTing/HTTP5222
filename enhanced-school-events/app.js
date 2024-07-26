const express = require('express');
const bodyParser = require('body-parser');
const path = require("path"); 
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const indexRouter = require('./routes/index');
const eventsRouter = require('./routes/events');
const syncRouter = require('./routes/sync');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/events', eventsRouter);
app.use('/sync', syncRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
