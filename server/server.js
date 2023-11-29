require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const apu = require("./routes/index")
const mongoose = require("mongoose")
const { DB_URI } = require("./config/index")


const app = express();
const PORT = process.env.PORT || 3030;



// Configure Header Information
// Allow request from any source. In real production, this should be limited to allowed origins only
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.disable("x-powered-by");  //Reduce fingerprinting
app.use(express.urlencoded({ extended: false }));

// === CONNECT DATABASE ===
mongoose.promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect(DB_URI, {})
    .then(console.log("Connected to database"))
    .catch((err) => console.log(err));

// === 4 - CONFIGURE ROUTES ===
// Connect Main route to server
app.use(apu);



app.get("/", (req, res) => {
    res.status(200).json({ msg: "Welcome to Server" });
  });

app.listen(PORT, () => {
    console.log(`Server is UP http://localhost:${PORT}`);
  });