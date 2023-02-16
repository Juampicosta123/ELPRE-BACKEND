const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const checkRol = require("../middleware/rol");
const { addPay, getPays, updatePay, deletePay } = require("../controllers/pay");

//PAY

//AGREGAR PAGO
router.put("/", authMiddleware, checkRol(["admin"]), addPay);

//LISTA PAGOS
router.get("/:id", authMiddleware, checkRol(["admin"]), getPays);

router.put("/:id", authMiddleware, checkRol(["admin"]), updatePay);





module.exports = router;
