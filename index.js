let express = require('express');
let app = express();
let bookedDatesRepo = require('./repos/bookedDatesRepo');

let router = express.Router();

router.get('/:date', function (req, res, next) {
    bookedDatesRepo.getById(req.params.id, function (data) {
        if (data) {
            res.status(200).json({
                "status": 200,
                "statusText": "OK",
                "message": "Booked date retrieved.",
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
