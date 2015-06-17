// Retrieve
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/activebizdb", function(err, db) {
  if (err) {
    db.close();
    return console.dir(err);
  }
  else {
    console.log("We are connected");
  }


  var projects = db.collection('projects', {
    w: 1
  }, function(err, collection) {
    if (err) {
      return console.dir(err);
    }
  });

  // Demo Data Start
  projects.insert({
    "name": "Sharepoint Upgrade",
    "budget": "5000.00",
    "isActive": true,
    "starts": "01-21-2013",
    "ends": "02-30-2018"
  });
  projects.insert({
    "name": "Windows Upgrade",
    "budget": "20000.00",
    "isActive": true,
    "starts": "01-21-2014",
    "ends": "02-30-2016"
  });
  projects.insert({
    "name": "MIS Systems",
    "budget": "30000.00",
    "isActive": false,
    "starts": "05-21-2016",
    "ends": "92-30-2019"
  });  
  // Demo Data End

  db.close();

});
