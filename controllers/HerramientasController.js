const Herramientas = require("../models/Herramientas");
const { Op } = require("sequelize");

exports.GetHerramientasList = (req, res, next) => {
  Herramientas.findAll()
    .then((result) => {
    
      const herramientas = result.map((result) => result.dataValues);


      res.render("herramientas/herramientas-list", {
        pageTitle: "Herramientas",
        herramientasActive: true,
        herramientas: herramientas,
        hasHerramientas: herramientas.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.GetDetailsHerramientas = (req, res, next) => {
  res.render("herramientas/details", {
    pageTitle: "Herramientas Details",
    herramientasActive: true,
    editMode: false,
  });
};


exports.PostHerramientasBySearch = (req, res, next) => {
  const search = req.body.Search.toLowerCase();
  const searchMode = false;

  Herramientas.findAll({where: {name: {[Op.like]: `%${search}%`}}})
    .then((result) => {
    
      const herramientas = result.map((result) => result.dataValues);

      res.render("herramientas/herramientas-list", {
        pageTitle: "Herramientas",
        herramientasActive: true,
        herramientas: herramientas,
        searchMode: true,
        hasHerramientas: herramientas.length > 0,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
