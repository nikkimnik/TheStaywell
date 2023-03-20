let fs = require("fs");

const FILE_NAME = "./assets/localattractions.json";

let localAttractionsRepo = {
  get: function (resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  },
  getById: function (id, resolve, reject) {
    fs.readFile(FILE_NAME, function (err, data) {
      if (err) {
        reject(err);
      } else {
        let localattractions = JSON.parse(data).find((b) => b.date == date);
        resolve(localAttractions);
      }
    });
  },
};

module.exports = localAttractionsRepo;
