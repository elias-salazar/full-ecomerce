const express = require("express");
const initModels = require("./models/initModels");
const db = require("./utils/database");
const handleError = require("./middlewares/error.middleware");
const { userRoutes, productsRoutes, ordersRoutes } = require("./routes");

const app = express();
app.use(express.json());

initModels();

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  console.log("Bienvenido al server");
});
app.use("/api/v1", userRoutes);
app.use("/api/v1", productsRoutes);
app.use("/api/v1", ordersRoutes);
app.use(handleError);

module.exports = app;
