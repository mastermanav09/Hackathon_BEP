require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoute");
const matchRoutes = require("./routes/matchRoute");
const teamRoutes = require("./routes/teamRoute");
const predictionRoutes = require("./routes/predictionRoute");

const PORT = process.env.PORT;
const dbUrl = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());

app.use(authRoutes);
app.use(matchRoutes);
app.use(teamRoutes);
app.use(predictionRoutes);

mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running at Port ", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
