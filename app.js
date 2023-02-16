require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {dbConnect} = require("./config/mongo");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

//Aquí invocamos las rutas
// localhost/api/____
app.use("/api", require("./routes/auth.js"));
app.use("/api/student", require("./routes/student.js"));
app.use("/api/pay", require("./routes/pay.js"));
app.use("/api/getpay", require("./routes/getPay.js"));
app.use("/api/notpay", require("./routes/checkNotPay"));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

dbConnect();
