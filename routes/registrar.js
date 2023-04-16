const express = require("express");

const router = express.Router();

const registrarController = require("../controllers/RegistrarController");

router.get("/crear-usuario", registrarController.GetCrearUsuario);
router.post("/crear-usuario", registrarController.PostCrearUsuario);
router.get("/perfil", registrarController.GetPerfil);



module.exports = router;