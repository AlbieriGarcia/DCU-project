const Cursos = require("../models/Cursos");
const { Op } = require("sequelize");

exports.GetCursosList = (req, res, next) => {
  Cursos.findAll()
    .then((result) => {
    
      const cursos = result.map((result) => result.dataValues);


      res.render("cursos/cursos-list", {
        pageTitle: "Cursos",
        cursosActive: true,
        cursos: cursos,
        hasCursos: cursos.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetDetailsCursos = (req, res, next) => {
  res.render("cursos/details", {
    pageTitle: "Cursos Details",
    cursosActive: true,
    editMode: false,
  });
};

exports.PostCursosBySearch = (req, res, next) => {
  const search = req.body.Search.toLowerCase();
  const searchMode = true;
  Cursos.findAll({where: {name: {[Op.like]: `%${search}%`}}})
    .then((result) => {
    
      const cursos = result.map((result) => result.dataValues);

      res.render("cursos/cursos-list", {
        pageTitle: "Cursos",
        cursosActive: true,
        cursos: cursos,
        searchMode: searchMode,
        hasCursos: cursos.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};



  
