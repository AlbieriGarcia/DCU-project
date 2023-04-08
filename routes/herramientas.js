const express = require("express");

const router = express.Router();

const herramientasController = require("../controllers/HerramientasController");

router.get("/herramientas", herramientasController.GetHerramientasList);
router.get("/details-herramientas", herramientasController.GetDetailsHerramientas);
router.post("/search-herramientas", herramientasController.PostHerramientasBySearch);


module.exports = router;