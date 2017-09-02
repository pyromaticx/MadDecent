var IPFS = require('ipfs');
var path = require('path');
var express = require('express');
var siteRoutes = require('./routes/siteroutes');
var app = express();
var port = process.env.PORT || 8080;
var ejs = require('ejs');
const spawn = require('child_process').spawn

//Start IPFS daemon
spawn('ipfs', ['daemon']);


// View engine config
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Web interface routes and middlewares
app.use(express.static('public'));
app.get('*', function(req, res){
  res.render('index');
});
app.listen(port, () => {
    console.log("Express listening on port: ", port);
});

