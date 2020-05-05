const express = require("express");
const path = require("path");
const fs = require("fs");

const deploymentController = require("../controllers/deployment.controller");
const router = express.Router();

router
  .route("/")
  .get(deploymentController.GetAll)
  .post(deploymentController.Create);

router
  .route("/:id")
  .get(deploymentController.GetOneById)
  .put(deploymentController.UpdateById)
  .delete(deploymentController.Delete);

module.exports = router;
