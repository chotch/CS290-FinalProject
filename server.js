var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = 3000;

var exerciseData = require(./exerciseData);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function (req, res){
  res.render('name of view template', {
    exercises: exerciseData
  });

  console.log('rendering view template');
})

app.listen(port, function (){
  console.log('server is listening on port', port);
});
