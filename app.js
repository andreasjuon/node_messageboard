// imports
const path = require("node:path");
const express = require("express");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

// create app and set its port
const app = express();
app.use(express.urlencoded({ extended: true }));//middleware that parses incoming requests with URL encoded payloads, like form submissions. makes form data available on req.body; extended: true allows for rich objects and arrays 
const PORT = process.env.PORT || 3000;

// set routes
app.use("/", indexRouter);
app.use("/new", newRouter);

// set views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
    
// start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});