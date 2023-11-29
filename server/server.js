const express = require("express");
require("dotenv").config();


const app = express();
const PORT = process.env.PORT || 3030;



app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({ msg: "Welcome to Server" });
  });

app.listen(PORT, () => {
    console.log(`Server is UP http://localhost:${PORT}`);
  });