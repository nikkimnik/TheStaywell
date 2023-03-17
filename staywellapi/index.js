let express = require('express');
let app = express();
<<<<<<< HEAD
let localattractionsRepo = require('./repos/localAttractionsRepo');
=======
let localAttractionsRepo = require('./repos/localAttractionsRepo');
>>>>>>> 530fdbe798924bc35ae27f2901bdb86f3c5d0465

let router = express.Router();

router.get('/:date', function (req, res, next) {
    localAttractionsRepo.getById(req.params.id, function (data) {
        if (data) {
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
<<<<<<< HEAD
                "message": "Local Attractions retrieved.",
=======
                "message": "Local Attraction retrieved.",
>>>>>>> 530fdbe798924bc35ae27f2901bdb86f3c5d0465
                "data": data
            });
        }
        else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
<<<<<<< HEAD
                "message": "The attraction'" + req.params.date + "' could not be found.",
=======
                "message": "The date '" + req.params.date + "' could not be found.",
>>>>>>> 530fdbe798924bc35ae27f2901bdb86f3c5d0465
                "error": {
                    "code": "NOT_FOUND",
                    "message": "The date '" + req.params.date + "' could not be found.",
                }
            }),       
        }
    }, function(err) {
        next(err);
    });
});

app.use('/api/', router);


var server = app.listen(5000, function () {
    console.log('Node server is running on http://localhost:5000..');
});
