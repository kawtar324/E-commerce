const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

// app
const app = express();

// port & db string
const port = process.env.PORT || 3000;
const dbPath = process.env.DBPATH || "mongodb://127.0.0.1:27017:ecommerce";

// middleware
app.use(cors());

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// import routes
const productRoute = require("./routes/product.routes");

// routes
app.use("/", productRoute);

// mongoose
mongoose.set("useFindAndModify", false);
mongoose.set("useUnifiedTopology", true);
mongoose
  .connect(dbPath, { useNewUrlParser: true })
  .then(() =>
    app.listen(port, () => console.log(`Server is listening to ${port}`))
  )
  .catch((err) => console.log(err));
