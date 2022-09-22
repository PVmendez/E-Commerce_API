require("dotenv").config();

const express = require("express");
const routes = require("./routes");
const APP_PORT = process.env.APP_PORT || 8000;
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(APP_PORT, () => {
  `\n[Express] Servidor corriendo en el puerto ${APP_PORT}.`;
  `[Express] Ingresar a http://localhost:${APP_PORT}.\n`;
});
