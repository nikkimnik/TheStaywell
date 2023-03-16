let fs = require ('fs');

const FILE_NAME = "./assets/bookedDates.json";

let bookedDatesRepo = {
    get: function (resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(JSON.parse(data));
            }
        });
    },
    getById: function (id, resolve, reject) {
        fs.readFile(FILE_NAME, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                let bookedDates = JSON.parse(data).find(b => b.date == date);
                resolve(bookedDates);
            }
        }
    }
};

module.exports = bookedDatesRepo;