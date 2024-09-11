const dotenv = require("dotenv");

dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const { Holding } = require("./models/holdingSchema");
const { Position } = require("./models/positionSchema");
const { User } = require("./models/userSchema");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// const PORT = process.env.PORT;
const URI = process.env.MONGO_URL;
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(bodyParser.json());

main()
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(URI);
}

//
app.get("/allHoldings", async (req, res) => {
  let allHolding = await Holding.find({});
  res.json(allHolding);
});

app.get("/allPositions", async (req, res) => {
  let allHolding = await Position.find({});
  res.json(allHolding);
});

app.get("/", cors(), (req, res) => {});
app.post("/", async (req, res) => {
  let { email, pass } = req.body;

  try {
    const check = await User.findOne({ email: email });
    if (check) {
      res.json("email exits");
    } else {
      res.json("email does not exits");
    }
  } catch (error) {
    res.json("email does not exits");
  }
});

app.post("/signup", async (req, res) => {
  const { email, password, conPassword } = req.body;
  const data = {
    email: email,
    password: password,
    conPassword: conPassword,
  };

  try {
    const check = await User.findOne({ email: email });
    if (check) {
      res.json("email exits");
    } else {
      await User.insertMany([data]);
      res.json("success");
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`server is running on port  `);
});
