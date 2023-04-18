const Usuario = require("../models/Usuario");

exports.GetCrearUsuario = (req, res, next) => {
    Usuario.findAll()
    .then((result) => {

      const usuario = result.map((result) => result.dataValues);

          res.render("registrar/registrar", {
            pageTitle: "Create usuario",
            registrarActive: true,
            usuario: usuario,
            hasUser: usuario.length > 0,
        
          })
        })
        .catch((err) => {
          console.log(err);
        });

};

exports.PostCrearUsuario = (req, res, next) => {
    const name = req.body.name;
    const image = req.body.image;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const type = req.body.type;
  
    Usuario.create({ name: name, image: image, telefono: telefono, email: email, type: type})
        .then((result) => {
        res.redirect("/perfil");
        })
        .catch((err) => {
        console.log(err);
     });
};

exports.GetPerfil = (req, res, next) => {
    Usuario.findAll()
      .then((result) => {
      
        const usuario = result.map((result) => result.dataValues);
  
  
        res.render("registrar/perfil", {
          pageTitle: "Perfil",
          perfilActive: true,
          usuario: usuario,
          hasPerfil: usuario.length > 0,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  

