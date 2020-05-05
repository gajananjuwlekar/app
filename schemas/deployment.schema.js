const mongoose = require("mongoose");

const deploymentSchema = new mongoose.Schema({
  url: {
    type: "String"
  },
  templateName: {
    select: true,
    type: "String"
  },
  version: {
    type: "String"
  },
  deployedAt: {
    type: "Date"
  }
});
module.exports = mongoose.model("deployment", deploymentSchema);
