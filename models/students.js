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
    },
    mobile: {
      type: String,
      required: true,
    },
    secondary_mobile: {
      type: String,
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
    timestamps: true, 
    versionKey: false,
  }
);

module.exports = mongoose.model("students", StudentsScheme);
