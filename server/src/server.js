// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();
//var bodyParser = require('body-parser');
var database = require('./database.js');
var readDocument = database.readDocument;

app.use(express.static('../client/build'));

//app.use(bodyParser.text());
//app.use(bodyParser.json());

//NON VERB FUNCTIONS

/**
* Get the user ID from a token. Returns -1 (an invalid ID)
* if it fails.
*/
function getUserIdFromToken(authorizationLine) {
  try {
    // Cut off "Bearer " from the header value.
    var token = authorizationLine.slice(7);
    // Convert the base64 string to a UTF-8 string.
    var regularString = new Buffer(token, 'base64').toString('utf8');
    // Convert the UTF-8 string into a JavaScript object.
    var tokenObj = JSON.parse(regularString);
    var id = tokenObj['id'];
    // Check that id is a number.
    if (typeof id === 'number') {
      return id;
    } else {
      // Not a number. Return -1, an invalid ID.
      return -1;
    }
  } catch (e) {
    // Return an invalid ID.
    return -1;
  }
}

//MAIN FEED
function getNotificationFeedData(user) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  // Get the Feed object for the user.
  var feedData = readDocument('feeds', userData.feed);

  //This is a list... Should I change the way I save this????
  var notificationList = [];

  for(var i = 0; i < feedData.notificationItems.length; i ++ ) {
    notificationList.push(readDocument('notificationItems', feedData.notificationItems[i]));
  }
  return notificationList;

}

//MAIN FEED
function getJobFeedData(user) {
  // Get the User object with the id "user".
  var userData = readDocument('users', user);
  // Get the Feed object for the user.
  var feedData = readDocument('feeds', userData.feed);

  //This is a list... Should I change the way I save this????
  var jobList = [];
  for(var i = 0; i < feedData.jobItems.length; i ++ ) {
    jobList.push(readDocument('jobItems', feedData.jobItems[i]));
  }
  return jobList;

}



function getProjectData(project_id){
  var projectData = readDocument('project', project_id);
  return projectData;
}


function getopen_positionData(pid){
  var positions = readDocument('positions', 'positions');
  var open = [];
  for(var i=0; i< positions.length; i++){
    if( positions[i].project_id == pid && positions[i].status == 'open'){
      open.push(positions[i]);
    }
  }
  return open;
}

function getfilled_positionData(pid){
  var positions = readDocument('positions', 'positions');
  var filled = [];
  for(var i=0; i< positions.length; i++){
    if( positions[i].project_id == pid && positions[i].status == 'filled'){
      filled.push( positions[i]);
    }
  }
  return filled;

}

function getProjectUpdates(id){
  var notifications = readDocument('notificationItems', id)
  return notifications;
}

function getProfileData(id, cb) {
    var profileData = readDocument('users', id);
    return profileData;
}
//END NON VERB FUNCTIONS

//VERB FUNCTIONS

//GET NOTIFICATION ITEMS
app.get('/feed/:userid/notificationitems', function(req, res) {
  var userid = req.params.userid;
  res.send(getNotificationFeedData(userid));
});

//GET JOB ITEMS
app.get('/feed/:userid/jobitems', function(req, res) {
  var userid = req.params.userid;
  res.send(getJobFeedData(userid));
});


//GET PROJECT DATA
app.get('/user/:userid/project/:projectid', function(req,res) {
  var projectid = req.params.projectid;

  res.send(getProjectData(projectid));
});

//GET OPEN POSITIONS
app.get('/user/:userid/open/pos_id/:pos_id', function(req,res){
  var pos_id = req.params.pos_id;

  res.send(getopen_positionData(pos_id));
});
//GET FILLED POSITIONS
app.get('/user/:userid/filled/pos_id/:pos_id', function(req,res){
  var pos_id = req.params.pos_id;

  res.send(getfilled_positionData(pos_id));
});
//GET PROJECT UPDATES
app.get('/user/:userid/projectid/:projectid', function(req,res){
  var projectid = req.params.pos_id;

  res.send(getProjectUpdates(projectid));
});
//END VERB FUNCTIONS

// Starts the server on port 3000!
app.listen(3000, function () {
  console.log('Listening on port 3000!');
});
