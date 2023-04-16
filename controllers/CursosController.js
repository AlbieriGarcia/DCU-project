const Cursos = require("../models/Cursos");

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
  const search = req.body.Search;
  const searchMode = false;
  Cursos.findAll({where: {name: search}})
    .then((result) => {
    
      const cursos = result.map((result) => result.dataValues);

      res.render("cursos/cursos-list", {
        pageTitle: "Cursos",
        cursosActive: true,
        cursos: cursos,
        searchMode: true,
        hasCursos: cursos.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};




  
