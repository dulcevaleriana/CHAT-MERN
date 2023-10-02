const { MongoClient, ServerApiVersion } = require("mongodb");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();

const client = new MongoClient(process.env.MONGO_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectDB() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!" .cyan.underline
    );
  } catch (err) {
    console.log(`connection failed, check error message: ${err}`);
  }
}

module.exports = connectDB;
