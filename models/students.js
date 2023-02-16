const mongoose = require("mongoose");

const StudentsScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    secondary_mobile: {
      type: String,
      required: true,
    },
    dni: {
      type: String,
      required: true,
    },
    pay: [
      {
        year: {
          type: String,
        },
        month: {
          type: String,
        },
        day: {
          type: String,
        },
      },
    ],
  },
  {
    timestamps: true, //TODO createdAt, updatedAt
    versionKey: false,
  }
);

module.exports = mongoose.model("students", StudentsScheme);
