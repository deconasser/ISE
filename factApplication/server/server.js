const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const database = require("./config/database");
const router = require("./routes/index.route");
const app = express();
database.connect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
router(app);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
