const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const recordRoutes = require("./routes/record.routes");
const dashboardRoutes = require("./routes/dashboard.routes");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");

const app = express();

//Middle ware
app.use(cors());
app.use(express.json()); //json parsing
const swaggerDocument = YAML.load("./swagger.yaml");

//Swagger API
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Routes
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/records",recordRoutes);
app.use("/api/dashboard",dashboardRoutes);

app.use("/", (req,res) => {
  res.send("Finance Dashboard root api is running....");
})

module.exports = app;