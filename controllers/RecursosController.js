const Recursos = require("../models/Recursos");
const { Op } = require("sequelize");

exports.GetRecursosList = (req, res, next) => {
  Recursos.findAll()
    .then((result) => {
    
      const recursos = result.map((result) => result.dataValues);


      res.render("recursos/recursos-list", {
        pageTitle: "Recursos",
        recursosActive: true,
        recursos: recursos,
        hasRecursos: recursos.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetDetailsRecursos = (req, res, next) => {
  res.render("recursos/details", {
    pageTitle: "Recursos Details",
    recursosActive: true,
    editMode: false,
  });
};


exports.PostRecursosBySearch = (req, res, next) => {
  const search = req.body.Search.toLowerCase();
  const searchMode = false;
  Recursos.findAll({where: {name: {[Op.like]: `%${search}%`}}})
    .then((result) => {
    
      const recursos = result.map((result) => result.dataValues);

      res.render("recursos/recursos-list", {
        pageTitle: "Recursos",
        recursosActive: true,
        recursos: recursos,
        searchMode: true,
        hasRecursos: recursos.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
