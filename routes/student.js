const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")
const { validatorCreateItem, validatorGetItem } = require("../validators/student")
const { getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/student")
//TODO http:localhost/tracks GET, POST, DELETE , PUT

//LISTA ITEMS
router.get("/", authMiddleware, checkRol(["admin"]),getItems);

//OBTENER DETALLE 
router.get("/:id", authMiddleware,validatorGetItem, checkRol(["admin"]),getItem);

//CREAR 
router.post("/", 
    authMiddleware,
    checkRol(["admin", "user"]),
    createItem);

//EDITAR
router.put("/:id", authMiddleware, checkRol(["admin"]), updateItem);

//ELIMINAR
router.delete("/:id", authMiddleware, checkRol(["admin"]), deleteItem);

module.exports = router;

