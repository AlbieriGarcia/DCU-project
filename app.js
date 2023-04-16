const path = require("path");
const express = require("express");
const { engine } = require("express-handlebars");
const sequelize = require("./context/database");
const Herramientas = require("./models/Herramientas");
const Recursos = require("./models/Recursos");
const Cursos = require("./models/Cursos");
const Usuario = require("./models/Usuario");

const errorController = require("./controllers/ErrorController");

const app = express();

const compareHelpers = require("./util/helpers/hbs/compare")

app.engine(
    "hbs",
    engine({
      layoutsDir: "views/layouts",
      defaultLayout: "main-layout",
      extname: "hbs",
      helpers:{
        equalValue: compareHelpers.EqualValue,
      }
    })
  );

app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

const herramientasRouter = require("./routes/herramientas");
const recursosRouter = require("./routes/recursos");
const cursosRouter = require("./routes/cursos");
const registrarRouter = require("./routes/registrar");


app.use(herramientasRouter);
app.use(recursosRouter);
app.use(cursosRouter);
app.use(registrarRouter);



app.use(errorController.Get404);


sequelize.sync()
.then((result) => {
    app.listen(5001);
})
.catch((err) => {
    console.log(err);
});




