var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var todo = require('./Route/todo'); // Imports routes for the products
var app = express();
var dev_dburl = 'mongodb+srv://Nav_Test:Database@cluster0.4t3wc.mongodb.net/todos?retryWrites=true&w=majority';
var mongoDB = process.env.MONGODB_URI || dev_dburl;
mongoose.connect(mongoDB);
//mongoose.connect(mongoDB,{useNewUrlParser : true, useUnifiedTopology : true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/todo', todo);

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});