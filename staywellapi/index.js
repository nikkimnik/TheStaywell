let express = require('express');
let app = express();
let localAttractionsRepo = require('./repos/localAttractionsRepo');

let router = express.Router();

router.get('/:date', function (req, res, next) {
    localAttractionsRepo.getById(req.params.id, function (data) {
        if (data) {
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "Local Attraction retrieved.",
                "data": data
            });
        }
        else {
            res.status(404).json({
                "status": 404,
                "statusText": "Not Found",
                "message": "The date '" + req.params.date + "' could not be found.",
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
