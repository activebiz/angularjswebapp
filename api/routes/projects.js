var express = require('express');
var router = express.Router();

var mongo = require('mongodb');
var BSON = mongo.BSONPure;
/* GET users listing. */
router.get('/', function(req, res, next) {
    var collection = req.db.get('projects');
    collection.find({}, {}, function(e, docs) {
        res.json(docs);
    });
});

router.post('/add', function(req, res) {
    var db = req.db;
    var collection = db.get('projects');
    collection.insert(req.body, function(err, result) {
        if (err) {
            console.log('error : An error has occurred - ' + err);
            res.send(err);
        }
        else {
            console.log('' + result + ' document added');
            res.send(req.body);
        }
    });
});

router.post('/remove', function(req, res) {
    var db = req.db;
    var collection = db.get('projects');
    console.log('Deleting project: ' + req.body.id);
    collection.remove({
        '_id': new BSON.ObjectID(req.body.id)
    }, function(err, result) {
        if (err) {
            console.log('error : An error has occurred - ' + err);
            res.send(err);
        }
        else {
            console.log('' + result + ' document deleted');
            res.send(req.body);
        }
    });
});

module.exports = router;
