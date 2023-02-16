const { studentsModel } = require("../models/students");
const { handleHttpError } = require("../utils/handleError");
const mongoose = require("mongoose");

const addPay = async (req, res) => {
  try {
    const { year, month, day, dni } = req.body;
    const data = await studentsModel.findOneAndUpdate(
      { dni },
      {
        $push: {
          pay: {
            year: year,
            month: month,
            day: day,
          },
        },
      }
    );
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e.message);
  }
};

//Obtener pagos de una persona
const getPays = async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const student = await studentsModel.findById(id);

    res.send({ pay: student.pay });
  } catch (e) {
    handleHttpError(res, e.message);
  }
};

const updatePay = async (req, res) => {
  try {
    const id = new mongoose.Types.ObjectId(req.params.id);
    const { year, month, day, payid } = req.body;
    const update = await studentsModel.updateMany({"pay._id": payid},
      {$set: {
        "pay.$.year": year,
        "pay.$.month": month,
        "pay.$.day": day,

      }} )
    res.send({ update });

  } catch (e) {
    handleHttpError(res, e.message);
  }
};

module.exports = {
  addPay,
  getPays,
  updatePay
};
