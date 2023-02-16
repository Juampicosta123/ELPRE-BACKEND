const studentsModel = require("../models/students");
const { handleHttpError } = require("../utils/handleError");
const express = require("express");
const { IncomingWebhook } = require("@slack/webhook");
const morganBody = require("morgan-body");
const webHook = new IncomingWebhook(
  "https://hooks.slack.com/services/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"
);
const app = express();
const checkNotPay = async (req, res) => {
  try {
    
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();
    const students = await studentsModel.find({});
    const alumns = students
      .filter((student) => student?.pay.length !== 0)
      .filter(
        (student) => student?.pay[student?.pay.length - 1]?.year === `${year}`
      )
      .filter(
        (student) => student?.pay[student?.pay.length - 1]?.month < `${month}`
      );
    if (day >= 15) {
      for (i = 0; i <= alumns?.length; i++) {
        if (alumns[i] !== undefined)
          morganBody(app, {
            stream: {
              write: webHook.send({
                text: `El alumno ${alumns[i]?.name} no ha pagado la cuota a tiempo`,
              }),
            },
          });
      }
      res.send("listo");
    } else {
      res.send("no se puede");
    }
  } catch (e) {
    handleHttpError(res, e.message);
  }
};

module.exports = { checkNotPay };
