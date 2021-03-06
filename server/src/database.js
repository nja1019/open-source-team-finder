

// Modify with your startup's name!
var startupName = "Okra Team";

// Put your mock objects here, as in Workshop 4
var initialData = {
  // The 'user' collection; contains all the users in our system
  "users": {
    // This user has id "1" and it is Jane
    "1" : {
      "_id" : 1,
      "name" : "Jane Doe",
      "image" : "img/jane.png",
      "banner" : "img/new_banner.jpg",
      // ID of Jane's feed
      "feed" : 1,
      // ID of Jane's Inbox
      "inboxId" : 1,
      "skills" : ["Scala", "Node.js", "Agile Methodology"],
      "interests" : ["Finance", "Clean Energy", "Drones", "Apples"],
      "bio" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "contact" : "myemail@email.com",

      "projects" : [1, 2],

      "allJobItems" : 1

    },

    "2" : {
      "_id" : 2,
      "name" : "Joe Doe",
      "image" : "",
      "banner" : "",
      "feed" : 2,
      "inboxId" : 2,
      "skills" : ["Java", "Numerical Graphing", "Agile Methodology", "Management"],
      "interests" : ["Drones", "Robotics", "Sports"],
      "bio" : "Joe, a deer, a female deer, Ray, a drop of golden sun, Me, a name, etc.",
      "contact" : "JoesCarEmporiumComeOnDown@email.com",
      "projects" : [2, 3],
      "allJobItems" : 1

    },

    "3" : {
      "_id" : 3,
      "name" : "Anna Hall",
      "image" : "",
      "banner" : "",
      "feed" : 3,
      "inboxId" : 3,
      "skills" : ["Java", "Management"],
      "interests" : ["Drones", "Robotics", "Music"],
      "bio" : "Hi, I'm Anna",
      "contact" : "annahall@email.com",
      "projects" : [1, 3],
      "allJobItems" : 1
    }
  },

  "projects" : {
    "1":{
      "userId": 1,
      "identifier" : "Okra",
      "id"         : 1,
      "notificationItems"    : 1,
      "msgs"       : 1,
      "positions"  : [1],
      "description": "Welcome to the show",
      "skillz"     :["Java", "Social", "Sick Card Tricks"],
      "startDate" : "2019-11-01",
      "endDate" : "2020-01-01",
      "inProgress" : 0,
      "tags" : ["Java", "Front-end"]

    },
    "2" : {
      "userId": 1,
      "identifier" : "Apple",
      "id"         : 2,
      "notificationItems"    : 2,
      "msgs"       : 2,
      "positions"  : [2],
      "description": "Nothing too fancy to do here.",
      "skillz"     :["Java", "Social", "Extreme Apple Picking", "High Level Design"],
      "startDate" : "2019-11-01",
      "endDate" : "2020-01-01",
      "inProgress" : 0,
      "tags" : ["C", "Low Level"]
    },
    "3" : {
      "userId": 1,
      "identifier" : "Peach",
      "id"         : 3,
      "notificationItems": 3,
      "msgs"       : 3,
      "positions"  : [1,2],
      "description": "We're looking for our friend James. We believe he is in the ocean and we need to develop good drones to find him.",
      "skillz"     :["Drones", "Artificial Intelligence", "Node.js", "Mongo"],
      "startDate" : "2019-11-01",
      "endDate" : "2020-01-01",
      "inProgress" : 0,
      "tags" : ["Databases", "Back-end", "Team"]
    },
    "4" : {
      "userId": 1,
      "identifier" : "Garbanzo Bean",
      "id"         : 4,
      "notificationItems"    : 4,
      "msgs"       : 4,
      "positions"        : 4,
      "description": "Our goal is too develop an onlign spell cheker that finds any errands you type.",
      "skillz"     :["Natural Language Processing", "Excel", "Java", "Regex"],
      "startDate" : "2019-11-01",
      "endDate" : "2020-01-01",
      "inProgress" : 0,
      "tags" : []
    }
  },

  "inbox" : {
    "1" : {
      "chats": [1],
      "name": "Jane Doe"
    }
  },

  "chats" : {
    "1": {
      "_id":1,
      "messages" : [1,2],
      "associated-users" : [1,2,3],
      "curr": "message-current panel panel-default",
      "name": "Okra Team",
      "color": "read"
    }/*,
    "2": {
    "_id":2,
    "messages" : [3,4],
    "associated-users" : [1,2],
    "curr": "message-preview panel panel-default",
    "name": "Joe Doe",
    "color": "unread"
  },
  "3": {
  "_id":3,
  "messages" : [5,6],
  "associated-users" : [1,3],
  "curr": "message-preview panel panel-default",
  "name": "Anna Hall",
  "color": "read"
}*/
},

"messages" : {
  "1" : {
    "id": 1,
    "author": 2,
    "contents" : "Hey guys, what should our main page feed look like?",
    "side":"left"
  },
  "2" : {
    "id": 2,
    "author": 1,
    "contents" : "idk any ideas?",
    "side":"right"
  },
  "3" : {
    "id": 3,
    "author": 2,
    "contents" : "Hello",
    "side":"left"
  },
  "4" : {
    "id": 4,
    "author": 1,
    "contents" : "Hi",
    "side":"right"
  },
  "5" : {
    "id": 5,
    "author":3,
    "contents" : "Wanna join my project?",
    "side":"left"
  },
  "6" : {
    "id": 6,
    "author":1,
    "contents" : "Can you tell me more about it?",
    "side":"right"
  }
},

"positions" : {

  "positions" :[

    {
      "id"         : 1,
      "status" : "filled",
      "user_Name": "Nomar Garciaparra",
      "userId" : 1,
      "project_id" : 1,
      "title"      : "Developer",
      "description": "develop things",
      "skillz"     : ["Java"]
    },

    {
      "id"         : 1,
      "status" : "open",
      "user_Name"  : null,
      "userId" : null,
      "project_id" : 1,
      "title"      : "developer",
      "description": "develop things",
      "skillz"     : ["Java"]
    }
  ]

},

"feeds" :{
  //Each feed has their own set of feed items
  "1" : {
    "id": 1,
    "notificationItems": [1,2],
    "jobItems":[1,2,4]
  },
  "2" : {
    "id": 2,
    "notificationItems": [1],
    "jobItems": [1,2]

  }
},

"jobItems": {
  "1" : {
    "_id" : 1,
    "title" : "Software Engineering Position at Snapdragon Team",
    "description" : "apply within!!!!",
    "tags" : ["Drones", "Finance"],
    "rankingType": "gold-button"

  },

  "2" : {
    "_id" : 2,
    "title" : "Quality Assurance Position at Wombat Team",
    "description" : "Please taste our apples we are too afraid.",
    "tags" : ["Apples", "Sports"],
    "rankingType": "bronze-button"
  },
  "3" : {
    "_id" : 3,
    "title" : "Quality Assurance Position on Caligula's Team",
    "description" : "Just me, myself, and I.",
    "tags" : ["Stuff", "Fun"],
    "rankingType": "bronze-button"
  },
  "4" : {
    "_id" : 4,
    "title" : "Lab Rat at Maze Team",
    "description" : "Don't get lost in the maze.",
    "tags" : ["Walking", "Games"],
    "rankingType": "silver-button"
  }

},


"notificationItems" : {
  "1" : {
    "_id" : 1,
    "title" : "Update on Okra Team",
    "description" : "We are running out of money and may be closing down in July :/."
  } ,

  "2" : {
    "_id" : 2,
    "title" : "Update on Apple Team",
    "description" : "Things couldn't be any better, but could we get more VC support?"
  }
},

"allJobItems" : {
  "1" : {
    "_id" : 1,
    "jobItems" : [1,2,3,4]
  }
}

};

var data;
// If 'true', the in-memory object representing the database has changed,
// and we should flush it to disk.
var updated = false;
// Pull in Node's file system and path modules.
var fs = require('fs'),
path = require('path');

try {
  // ./database.json may be missing. The comment below prevents ESLint from
  // complaining about it.
  // Read more about configuration comments at the following URL:
  // http://eslint.org/docs/user-guide/configuring#configuring-rules
  /* eslint "node/no-missing-require": "off" */
  data = require('./database.json');
} catch (e) {
  // ./database.json is missing. Use the seed data defined above
  data = JSONClone(initialData);
}

/**
* A dumb cloning routing. Serializes a JSON object as a string, then
* deserializes it.
*/
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
* Emulates reading a "document" from a NoSQL database.
* Doesn't do any tricky document joins, as we will cover that in the latter
* half of the course. :)
*/
function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  var collectionObj = data[collection];
  if (!collectionObj) {
    throw new Error(`Object collection ${collection} does not exist in the database!`);
  }
  var obj = collectionObj[id];
  if (obj === undefined) {
    throw new Error(`Object ${id} does not exist in object collection ${collection} in the database!`);
  }
  return JSONClone(data[collection][id]);
}
module.exports.readDocument = readDocument;

/**
* Emulates writing a "document" to a NoSQL database.
*/
function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  if (id === undefined) {
    throw new Error(`You cannot write a document to the database without an _id! Use AddDocument if this is a new object.`);
  }
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  updated = true;
}
module.exports.writeDocument = writeDocument;

/**
* Adds a new document to the NoSQL database.
*/
function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  if (newDoc.hasOwnProperty('_id')) {
    throw new Error(`You cannot add a document that already has an _id. addDocument is for new documents that do not have an ID yet.`);
  }
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}
module.exports.addDocument = addDocument;

/**
* Deletes a document from an object collection.
*/
function deleteDocument(collectionName, id) {
  var collection = data[collectionName];
  if (!collection[id]) {
    throw new Error(`Collection ${collectionName} lacks an item with id ${id}!`);
  }
  delete collection[id];
  updated = true;
}
module.exports.deleteDocument = deleteDocument;

/**
* Returns an entire object collection.
*/
function getCollection(collectionName) {
  return JSONClone(data[collectionName]);
}
module.exports.getCollection = getCollection;

/**
* Reset the database.
*/
function resetDatabase() {
  data = JSONClone(initialData);
  updated = true;
}
module.exports.resetDatabase = resetDatabase;

// Periodically updates the database on the hard drive
// when changed.
setInterval(function() {
  if (updated) {
    fs.writeFileSync(path.join(__dirname, 'database.json'), JSON.stringify(data), { encoding: 'utf8' });
    updated = false;
  }
}, 200);
