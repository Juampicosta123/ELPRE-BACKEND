const { studentsModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const mongoose = require("mongoose");

const getPay = async (req, res) => {
  try {
    const payid = req.query.payid;
    const id = new mongoose.Types.ObjectId(req.params.id);
    const pay = await studentsModel.findById(
        id,
        {_id: 0, pay: {$elemMatch : {_id: payid}}}
    );

    res.send(pay);
  } catch (e) {
    handleHttpError(res, e.message);
  }
};

module.exports = { getPay };
