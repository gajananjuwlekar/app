/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const DBNAME = "demoDB"; //change it to your db name
const connectionString = `mongodb+srv://gajanan:gaju21993@cluster0-erbsr.mongodb.net/${DBNAME}?retryWrites=true&w=majority`; //change it to your db connection String
mongoose.connect(connectionString, { useNewUrlParser: true }).then(a => {});

//routes

const deploymentRouter = require("./routes/deployment.route");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.send({ message: "Welcome to api!" });
});
app.get("/images/*", (req, res) => {
  res.sendFile(path.join(__dirname, req.path));
});

//Entity Routes

app.use("/api/deployment", deploymentRouter);

const port = process.env.port || 3353;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);
