require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoute");
const matchRoutes = require("./routes/matchRoute");
const teamRoutes = require("./routes/teamRoute");
const predictionRoutes = require("./routes/predictionRoute");

const PORT = process.env.PORT || 8080;
const dbUrl = process.env.MONGODB_URI;

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/match", matchRoutes);
app.use("/api/team", teamRoutes);
app.use("/api/prediction", predictionRoutes);

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message || "Something went wrong!";
  const errorData = error.data;

  res.status(status).json({
    message: message,
    errorData: errorData,
  });
});

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
