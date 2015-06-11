var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var collection = req.db.get('projects');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

router.post('/add', function(req, res) {
    var db = req.db;
    var collection = db.get('projects');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});

module.exports = router;
