const DEPLOYMENT = require("../schemas/deployment.schema");

const GetAll = async (req, res) => {
  try {
    return res.send(await DEPLOYMENT.find());
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
const GetOneById = async (req, res) => {
  try {
    return res.send(await DEPLOYMENT.findById(req.params.id));
  } catch (error) {
    return res.status(400).send(error.message);
  }
};
const UpdateById = async (req, res) => {
  try {
    let Obj = { ...req.body };

    const doc = await DEPLOYMENT.findOneAndUpdate({ _id: req.params.id }, Obj, {
      new: true
    });

    return res.send(await DEPLOYMENT.findById(doc._id));
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const Create = async (req, res) => {
  try {
    let Obj = { ...req.body };

    const doc = await DEPLOYMENT.create({ ...Obj });

    return res.send(await DEPLOYMENT.findById(doc._id));
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

const Delete = async (req, res) => {
  try {
    return res.send(await DEPLOYMENT.remove({ _id: req.params.id }));
  } catch (error) {
    return res.status(400).send(error.message);
  }
};

module.exports = {
  GetAll,
  GetOneById,
  UpdateById,
  Delete,
  Create
};
