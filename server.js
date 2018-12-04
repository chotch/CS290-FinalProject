var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = 3000;

// import JSON data (ie. exercise objects)
var exerciseData = require('./exerciseData');
var myPlanData = require('./myPlanData');

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
  res.render('homePage', {
    // pass in the context object containing our exercise data
    exercises: exerciseData
  });
});

// serve the My Plan (ie. homePage.handlebars)
app.get('/my-workout-plan', function (req, res) {
  res.render('planPage', {  // planPage.handlebars, feed it json data
    // pass in the context object containing the user's exercise plan
    //    see: myPlanData.json, dayMyPlan.handlebars, and exercise.handlebars
    days: myPlanData
  });
});

// silence "couldn't find favicon.ico" error
app.get('/favicon.ico', function (req, res) {
  app.status(200);
  app.end();
});

// serve any files matching those in the "./public" directory
app.use(express.static('public'));


