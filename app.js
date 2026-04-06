const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user.routes");
const authRoutes = require("./routes/auth.routes");
const recordRoutes = require("./routes/record.routes");
const dashboardRoutes = require("./routes/dashboard.routes");

const app = express();

//Middle ware
app.use(cors());
app.use(express.json()); //json parsing

//Routes
app.use("/", (req,res) => {
  res.send("Finance Dashboard root api is running....");
})
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
app.use("/api/records",recordRoutes);
app.use("/api/dashboard",dashboardRoutes);

module.exports = app;