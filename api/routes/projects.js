var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var collection = req.db.get('projects');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

module.exports = router;
