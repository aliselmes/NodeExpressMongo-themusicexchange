const express = require('express');
const morgan = require('morgan');
const itemRouter = require('./routes/itemRouter');
const instructorRouter = require('./routes/instructorRouter');
const musicianRouter = require('./routes/musicianRouter');
const gigRouter = require('./routes/gigRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/instructors', instructorRouter);
app.use('/items', itemRouter);
app.use('/musicians', musicianRouter);
app.use('/gigs', gigRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running as http://${hostname}:${port}/`);
});