const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors()); // ✅ allow React frontend to call Express backend

app.get("/", (req, res) => {
  res.send("hello from express");
});

app.get("/app", async (req, res) => {
  let result = await axios.get("https://dog.ceo/api/breeds/image/random");
  console.log(result.data.message);

  res.json({ message: result.data.message });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
