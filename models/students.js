const mongoose = require("mongoose");
const StudentsScheme = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: false
    },
    address: {
      type: String,
      unique: false
    },
    mobile: {
      type: String,
    },
    secondary_mobile: {
      type: String,
      unique: false
    },
    dni: {
      type: String,
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
