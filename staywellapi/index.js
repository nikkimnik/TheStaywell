const express = require("express");
const app = express();
const localAttractionsRepo = require("./repos/localAttractionsRepo");

const router = express.Router();

router.get("/:id", function (req, res, next) {
  localAttractionsRepo.getById(
    req.params.id,
    function (data) {
      if (data) {
        res.status(200).json({
          status: 200,
          statusText: "OK",
          message: "Local Attractions retrieved.",
          data: data,
        });
      } else {
        res.status(404).json({
          status: 404,
          statusText: "Not Found",
          message: "The attraction '" + req.params.id + "' could not be found.",
          error: {
            code: "NOT_FOUND",
            message:
              "The attraction '" + req.params.id + "' could not be found.",
          },
        });
      }
    },
    function (err) {
      next(err);
    }
  );
});

app.use("/api", router);

const server = app.listen(5000, function () {
  console.log("Node server is running on http://localhost:5000..");
});
