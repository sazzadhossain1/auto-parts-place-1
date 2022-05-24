const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const res = require("express/lib/response");
const port = process.env.PORT || 5000;
require("dotenv").config();

const app = express();

// middleware //
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ceuee.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
  } finally {
  }
}

run().catch(console.dir);

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Auto Parts Place Done");
});

app.listen(port, () => {
  console.log("port is listening", port);
});
