const { matchedData } = require("express-validator");
const  studentsModel  = require("../models/students");
const { handleHttpError } = require("../utils/handleError");



const getItems = async (req, res) => {
  try {
    const student = req.student;
    const data = await studentsModel.find({});
    res.send({ data, student });
  } catch (e) {
    handleHttpError(res, e.message);
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await studentsModel.findById(id);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e.message);
  }
};

const createItem = async (req, res) => {
  try {
    const body = req.body;

    const data = await studentsModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e.message);
  }
};

//Actualizar un alumno
const updateItem = async (req, res) => {
  try {
    const id = req.params;
    const body = req.body;
    console.log(id);
    console.log(body);
    const data = await studentsModel.findOneAndUpdate(id, body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e.message);
  }
};

//Eliminar un registro
const deleteItem = async (req, res) => {
  try {;
    const { id } = req.params;
    const data = await studentsModel.findByIdAndDelete({ _id: id });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e.message);
  }
};

//Agregar pago

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
