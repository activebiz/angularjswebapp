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
  
  projects.insert({
    "data": [{
      "name": "Sharepoint Upgrade<br><small class='text-muted'><i>Budget: 5,000<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='100'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='offline' alt='user'></a> </div> ",
      "status": "<span class='label label-success'>ACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-barcolor='#aafaaf' data-sparkline-line-width='2.5' data-sparkline-line-val='[6,4,7,8,47,9,9,8,3,2,2,5,6,7,4,1,5,7,6]' data-sparkline-bar-val='[6,4,7,8,47,9,9,8,3,2,2,5,6,7,9,9,5,7,6]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' name='start_interval' class='onoffswitch-checkbox' id='st1' checked='checked'><label class='onoffswitch-label' for='st1'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-21-2013",
      "ends": "<strong>02-30-2018</strong>",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }, {
      "name": "IT Room Renovation<br><small class='text-muted'><i>Budget: 25,000<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='30'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='styles/img/avatars/2.png' class='online'></a> <a href='javascript:void(0)'><img src='styles/img/avatars/3.png' class='busy'></a><a href='javascript:void(0)'><img src='styles/img/avatars/sunny.png' class='away'></a> </div> ",
      "status": "<span class='label label-success'>ACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-line-width='2.5' data-sparkline-line-val='[2, 4, 5, 6, 11, 14, 15, 17, 18, 20, 22, 24, 26, 33, 35, 37, 44, 48, 50]' data-sparkline-bar-val='[4, 7, 8, 9, 14, 15, 16, 20, 21, 23, 24, 28, 29, 30, 34, 35, 36, 38, 41]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' name='start_interval' class='onoffswitch-checkbox' id='st2'><label class='onoffswitch-label' for='st2'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-17-2013",
      "ends": "<strong>02-30-2016</strong>",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }]
  });

  db.close();
  
});
