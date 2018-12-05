var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
/*var MongoClient = require('mongodb').MongoClient;
var mongoURL = "mongodb://" +
  mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort +
  "/" + mongoDBName;

var mongoHost = process.env.MONGO_HOST;
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME;
var mongoPassword = process.env.MONGO_PASSWORD;
var mongoDBName = process.env.MONGO_DB_NAME;

var mongoDB = null;*/

var app = express();
var port = 3000;

// import JSON data (ie. exercise objects)
var exerciseData = require('./exerciseData');
var myPlanData = require('./myPlanData');

app.use(bodyParser.json()); //all request bodies being parsed as JSON

// register `express-handlebars` with Express as a template engine
//  main' is derived from the name of our layout template file, `views/layouts/main.handlebars`
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// tell Express to use `express-handlebars` by default every time
app.set('view engine', 'handlebars');

// start listening for requests on port 3000
app.listen(port, function () {
  console.log('server is listening on port', port);
});


/*
        ROUTING
*/

// serve the homepage (ie. homePage.handlebars)
app.get('/', function (req, res) {
  res.status(200).render('homePage', {
    // pass in the context object containing our exercise data
    exercises: exerciseData
  });
});

// serve the My Plan (ie. homePage.handlebars)
app.get('/my-workout-plan', function (req, res) {
  res.status(200).render('planPage', {  // planPage.handlebars, feed it json data
    // pass in the context object containing the user's exercise plan
    //    see: myPlanData.json, dayMyPlan.handlebars, and exercise.handlebars
    days: myPlanData
  });
});

//To display/read individual days, needs fixing
app.get('/my-workout-plan/:dayOfWeek', function(req, res, next){
  var dayOfWeek = req.params.dayOfWeek.toLowerCase();
  if (myPlanData[dayOfWeek]){
    res.status(200).render('planPage', myPlanData[dayOfWeek]);
  }
  else{
    next();
  }
});

//app.post('/my-workout-plan/addExercise', function(req, res){
//  if (myPlanData[])

//});

function storeExerciseInDB(){
  var request = new XMLHttpRequest();
  var requestURL = '/my-workout-plan/' + dayOfWeek + '/addExercise';
  request.open('POST', requestURL);
}

// silence "couldn't find favicon.ico" error
app.get('/favicon.ico', function (req, res) {
  res.status(200);
});

// serve any files matching those in the "./public" directory
app.use(express.static('public'));

//serves 404 pages (404.handlebars)
app.get('*', function(req, res){
  res.status(404).render('404');
});
