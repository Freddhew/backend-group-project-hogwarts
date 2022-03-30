const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const routes = require("./coursesApiRoutes");
const routerApply = require("./apiApply");
const routerLoggin = require("./loggin");

const app = express();
const port = 8080;

app.use(bodyParser.json());

const handleStaticFiles = express.static(
  path.join(__dirname, "..", "client", "build")
);
app.use(handleStaticFiles);
app.use("", routes);
const router = require("./apiStaff");
const educationApi = require("./apiEducation");

app.use(educationApi);
app.use(routerApply);
app.use(routerLoggin);
app.use(router);

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
