require("dotenv").config()
const express = require("express")
const cors = require("cors")
const morganBody = require("morgan-body")
const loggerStream = require("./utils/handleLogger")
const dbConnectNoSql = require('./config/mongo')
const app = express()

const ENGINE_DB = process.env.ENGINE_DB;

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

//WEBHOOK MENSAJES DE ERROR A SLACK


morganBody(app, {
    noColors: true,
    stream: loggerStream,
    skip: function(req,res){
        return res.statusCode < 400 // 2xx, 3xx lo omite.
    }
})
const port = process.env.PORT || 3000

//Aquí invocamos las rutas
// localhost/api/____
app.use("/api", require("./routes/auth.js"))
app.use("/api/student", require("./routes/student.js"))
app.use("/api/pay", require("./routes/pay.js"))
app.use("/api/getpay", require("./routes/getPay.js"))
app.use("/api/notpay", require("./routes/checkNotPay"))




app.listen(port, () =>{
    console.log(`http://localhost:${port}`)
});

(ENGINE_DB === 'nosql') ? dbConnectNoSql() : dbConnectMySql();
