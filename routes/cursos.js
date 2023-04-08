const express = require("express");

const router = express.Router();

const cursosController = require("../controllers/CursosController");

router.get("/cursos", cursosController.GetCursosList);
router.get("/details-cursos", cursosController.GetDetailsCursos);
router.post("/search-cursos", cursosController.PostCursosBySearch);


module.exports = router;