const express = require("express");

const router = express.Router();

const recursosController = require("../controllers/RecursosController");

router.get("/recursos", recursosController.GetRecursosList);
router.get("/details-recursos", recursosController.GetDetailsRecursos);
router.post("/search-recursos", recursosController.PostRecursosBySearch);


module.exports = router;