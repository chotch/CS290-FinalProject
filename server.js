var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = 3000;

var exerciseData = require('./exerciseData');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.get('/', function (req, res){
  res.render('homePage', {
    exercises: exerciseData
  });

  console.log('rendering view template');
});

app.use(express.static('public'));

app.listen(port, function (){
  console.log('server is listening on port', port);
});
