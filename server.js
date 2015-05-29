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

  var projectList = db.collection('projectlist', {
    w: 1
  }, function(err, collection) {
    if (err) {
      return console.dir(err);
    }
  });

  projectList.insert({
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
    }, {
      "name": "Car Industry Studies<br><small class='text-muted'><i>Budget: 1,000<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='55'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='online' alt='user'></a><a href='javascript:void(0)'><img src='styles/img/avatars/female.png' class='online'></a> <a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='busy'></a><a href='javascript:void(0)'><img src='styles/img/avatars/sunny.png' class='away'></a> </div> ",
      "status": "<span class='label label-success'>ACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-barcolor='#aafaaf' data-sparkline-line-width='2.5' data-sparkline-line-val='[12, 11, 5, 15, 1, 10, 20, 4, 8, 6, 13, 2, 7, 9, 17, 14, 16, 18, 19]' data-sparkline-bar-val='[9, 11, 16, 15, 1, 5, 13, 2, 14, 6, 12, 17, 3, 18, 7, 10, 19, 8, 20]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' name='start_interval' class='onoffswitch-checkbox' id='st3'><label class='onoffswitch-label' for='st3'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-8-2013",
      "ends": "<strong>03-03-2015</strong>",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }, {
      "name": "Update all forms <br><small class='text-muted'><i>Budget: 2,000<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='68'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='styles/img/avatars/4.png' class='busy'></a> </div> ",
      "status": "<span class='label label-success'>ACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-barcolor='#aafaaf' data-sparkline-line-width='2.5' data-sparkline-line-val='[10, 20, 9, 1, 4, 17, 19, 2, 8, 12, 6, 14, 18, 11, 15, 5, 16, 13, 3]' data-sparkline-bar-val='[4, 15, 8, 3, 9, 10, 12, 14, 5, 16, 17, 2, 20, 18, 7, 19, 13, 1, 6]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' name='start_interval' class='onoffswitch-checkbox' id='st4'><label class='onoffswitch-label' for='st4'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-12-2013",
      "ends": "<strong>03-15-2015</strong>",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }, {
      "name": "Preliminary studies of client intel<br><small class='text-muted'><i>Budget: 3,500<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='10'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='styles/img/avatars/female.png' class='online'></a> <a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='busy'></a></div> ",
      "status": "<span class='label label-success'>ACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-barcolor='#aafaaf' data-sparkline-line-width='2.5' data-sparkline-line-val='[10, 20, 15, 12, 16, 7, 1, 13, 8, 2, 5, 14, 4, 18, 19, 3, 6, 17, 9]' data-sparkline-bar-val='[9, 17, 3, 16, 18, 15, 4, 14, 8, 6, 12, 7, 13, 19, 10, 2, 11, 5, 20]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' name='start_interval' class='onoffswitch-checkbox' id='st5'><label class='onoffswitch-label' for='st5'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-13-2013",
      "ends": "<strong>06-20-2015</strong>",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }, {
      "name": "AngularJS UI design and development<br><small class='text-muted'><i>Budget: 5,000<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='15'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='away'></a><a href='javascript:void(0)'><img src='styles/img/avatars/3.png' class='away'></a> </div> ",
      "status": "<span class='label label-success'>ACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-barcolor='#aafaaf' data-sparkline-line-width='2.5' data-sparkline-line-val='[6, 20, 13, 15, 5, 3, 11, 16, 19, 14, 9, 12, 7, 18, 10, 8, 1, 17, 4]' data-sparkline-bar-val='[18, 15, 1, 19, 4, 9, 14, 5, 7, 6, 17, 13, 16, 20, 3, 11, 12, 2, 8]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' name='start_interval' class='onoffswitch-checkbox' id='st6'><label class='onoffswitch-label' for='st6'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-9-2013",
      "ends": "<strong>08-01-2015</strong>",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }, {
      "name": "<strong>Phase 1</strong>: Modual implimentations<br><small class='text-muted'><i>Budget: 7,000<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='100'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='online' alt='user'></a></div> ",
      "status": "<span class='label label-default'>INACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-barcolor='#aafaaf' data-sparkline-line-width='2.5' data-sparkline-line-val='[16, 33, 18, 39, 46, 50, 17, 19, 42, 1, 5, 44, 32, 11, 29, 13, 28, 34, 15]' data-sparkline-bar-val='[16, 33, 18, 39, 46, 50, 17, 19, 42, 1, 5, 44, 32, 11, 29, 13, 28, 34, 15]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' name='start_interval' class='onoffswitch-checkbox' id='st7'><label class='onoffswitch-label' for='st7'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-4-2013",
      "ends": "<strong>09-11-2019</strong>",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }, {
      "name": "<strong>Phase 2</strong>: Beta testing<br><small class='text-muted'><i>No budget was locked in<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='15'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='styles/img/avatars/4.png' class='offline'></a> </div> ",
      "status": "<span class='label label-success'>ACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-barcolor='#aafaaf' data-sparkline-line-width='2.5' data-sparkline-line-val='[21, 14, 33, 39, 38, 24, 40, 18, 37, 1, 46, 13, 50, 19, 12, 15, 44, 30, 6]' data-sparkline-bar-val='[17, 16, 47, 34, 30, 32, 49, 21, 28, 31, 41, 24, 38, 50, 18, 29, 20, 48, 14]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' checked='checked' name='start_interval' class='onoffswitch-checkbox' id='st8'><label class='onoffswitch-label' for='st8'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-11-2013",
      "ends": "<strong>07-11-2015</strong>",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }, {
      "name": "<strong>Phase 3</strong>: Deploy to management<br><small class='text-muted'><i>No budget was locked in<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='10'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='styles/img/avatars/female.png' class='offline'></a> <a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='busy'></a><a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='away'></a><a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='online' alt='user'></a><a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='online' alt='user'></a> </div> ",
      "status": "<span class='label label-success'>ACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-barcolor='#aafaaf' data-sparkline-line-width='2.5' data-sparkline-line-val='[13, 39, 14, 44, 10, 33, 18, 30, 26, 34, 9, 27, 24, 46, 11, 32, 41, 1, 23]' data-sparkline-bar-val='[13, 39, 14, 44, 10, 33, 18, 30, 26, 34, 9, 27, 24, 46, 11, 32, 41, 1, 23]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' name='start_interval' class='onoffswitch-checkbox' id='st9'><label class='onoffswitch-label' for='st9'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-19-2013",
      "ends": "08-30-2014",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }, {
      "name": "Prepare property management contracts<br><small class='text-muted'><i>No budget was locked in<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='55'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='styles/img/avatars/female.png' class='online'></a></div> ",
      "status": "<span class='label label-success'>ACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-barcolor='#aafaaf' data-sparkline-line-width='2.5' data-sparkline-line-val='[26, 50, 18, 27, 41, 12, 38, 25, 2, 8, 24, 31, 47, 43, 6, 21, 19, 33, 15]' data-sparkline-bar-val='[35, 10, 31, 18, 32, 42, 1, 37, 50, 17, 15, 5, 14, 29, 24, 16, 13, 23, 45]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' name='start_interval' class='onoffswitch-checkbox' id='st10'><label class='onoffswitch-label' for='st10'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-20-2013",
      "ends": "<strong>02-30-2015</strong>",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }, {
      "name": "Brick factory<br><small class='text-muted'><i>Budget: 1,000<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='75'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='styles/img/avatars/female.png' class='online'></a> <a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='busy'></a><a href='javascript:void(0)'><img src='styles/img/avatars/1.png' class='away'></a> </div> ",
      "status": "<span class='label label-success'>ACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-barcolor='#aafaaf' data-sparkline-line-width='2.5' data-sparkline-line-val='[33, 22, 26, 19, 36, 5, 38, 18, 46, 39, 37, 6, 31, 41, 1, 40, 30, 28, 3]' data-sparkline-bar-val='[33, 22, 26, 19, 36, 5, 38, 18, 46, 39, 37, 6, 31, 41, 1, 40, 30, 28, 3]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' checked='checked' name='start_interval' class='onoffswitch-checkbox' id='st11'><label class='onoffswitch-label' for='st11'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-25-2013",
      "ends": "<strong>03-03-2014</strong>",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }, {
      "name": "Upgrade to windows 8.1<br><small class='text-muted'><i>Budget: 2,000<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='48'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='online' alt='user'></a><a href='javascript:void(0)'><img src='styles/img/avatars/female.png' class='online'></a> <a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='busy'></a><a href='javascript:void(0)'><img src='styles/img/avatars/sunny.png' class='away'></a> </div> ",
      "status": "<span class='label label-success'>ACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-barcolor='#aafaaf' data-sparkline-line-width='2.5' data-sparkline-line-val='[46, 4, 30, 23, 20, 21, 3, 49, 10, 1, 37, 38, 47, 33, 25, 50, 40, 2, 28]' data-sparkline-bar-val='[46, 4, 30, 23, 20, 21, 3, 49, 10, 1, 37, 38, 47, 33, 25, 50, 40, 2, 28]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' checked='checked' name='start_interval' class='onoffswitch-checkbox' id='st12'><label class='onoffswitch-label' for='st12'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-27-2013",
      "ends": "<strong>02-30-2015</strong>",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }, {
      "name": "Refurbish Architecture<br><small class='text-muted'><i>Budget: 1,200<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='37'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='styles/img/avatars/sunny.png' class='away' alt='user'></a><a href='javascript:void(0)'><img src='styles/img/avatars/female.png' class='online'></a> </div> ",
      "status": "<span class='label label-success'>ACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-barcolor='#aafaaf' data-sparkline-line-width='2.5' data-sparkline-line-val='[28, 19, 30, 33, 10, 24, 38, 31, 47, 21, 13, 48, 9, 29, 46, 3, 42, 45, 18]' data-sparkline-bar-val='[11, 19, 17, 16, 27, 12, 47, 1, 4, 14, 8, 41, 13, 38, 6, 28, 36, 2, 45]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' checked='checked' name='start_interval' class='onoffswitch-checkbox' id='st13'><label class='onoffswitch-label' for='st13'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-29-2013",
      "ends": "<strong>12-15-2019</strong>",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }, {
      "name": "Create filters and directives<br><small class='text-muted'><i>Budget: 15,000<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='100'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='online' alt='user'></a><a href='javascript:void(0)'><img src='styles/img/avatars/female.png' class='online'></a> <a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='busy'></a><a href='javascript:void(0)'><img src='styles/img/avatars/sunny.png' class='away'></a> </div> ",
      "status": "<span class='label label-success'>ACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-barcolor='#aafaaf' data-sparkline-line-width='2.5' data-sparkline-line-val='[6, 40, 14, 36, 32, 4, 7, 16, 50, 49, 24, 47, 33, 10, 45, 41, 18, 37, 38]' data-sparkline-bar-val='[9, 4, 32, 33, 18, 23, 17, 8, 30, 7, 48, 29, 10, 14, 6, 36, 28, 16, 24]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' name='start_interval' class='onoffswitch-checkbox' id='st14'><label class='onoffswitch-label' for='st14'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-6-2013",
      "ends": "<strong>11-09-2015</strong>",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }, {
      "name": "Publish to Wrapbootstrap<br><small class='text-muted'><i>Budget: 4,000<i></small>",
      "est": "<td><div class='progress progress-xs' data-progressbar-value='95'><div class='progress-bar'></div></div></td>",
      "contacts": "<div class='project-members'><a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='online' alt='user'></a><a href='javascript:void(0)'><img src='styles/img/avatars/female.png' class='online'></a> <a href='javascript:void(0)'><img src='styles/img/avatars/male.png' class='busy'></a><a href='javascript:void(0)'><img src='styles/img/avatars/sunny.png' class='away'></a> </div> ",
      "status": "<span class='label label-success'>ACTIVE</span>",
      "target-actual": "<span style='margin-top:5px' class='sparkline display-inline' data-sparkline-type='compositebar' data-sparkline-height='18px' data-sparkline-barcolor='#aafaaf' data-sparkline-line-width='2.5' data-sparkline-line-val='[50, 4, 21, 25, 47, 35, 27, 44, 41, 23, 46, 29, 48, 39, 3, 28, 17, 8, 26]' data-sparkline-bar-val='[50, 4, 21, 25, 47, 35, 27, 44, 41, 23, 46, 29, 48, 39, 3, 28, 17, 8, 26]'></span>",
      "actual": "<span class='sparkline text-align-center' data-sparkline-type='line' data-sparkline-width='100%' data-sparkline-height='25px'>20,-35,70</span>",
      "tracker": "<span class='onoffswitch'><input type='checkbox' name='start_interval' class='onoffswitch-checkbox' id='st15'><label class='onoffswitch-label' for='st15'><span class='onoffswitch-inner' data-swchon-text='ON' data-swchoff-text='OFF'></span><span class='onoffswitch-switch'></span></label></span>",
      "starts": "01-8-2013",
      "ends": "<strong>07-07-2015</strong>",
      "comments": "This is a blank comments area, used to add comments and keep notes",
      "action": "<button class='btn btn-xs'>Open case</button> <button class='btn btn-xs btn-danger pull-right' style='margin-left:5px'>Delete Record</button> <button class='btn btn-xs btn-success pull-right'>Save Changes</button> "
    }]
  });
  
  console.log(db.collection('projectlist').find());
  
  db.close();
  
});
