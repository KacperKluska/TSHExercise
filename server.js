require("dotenv").config();
let express = require("express");
let cors = require("cors");
let app = express();

const PORT = process.env.APP_PORT;
const HOST = process.env.APP_HOST;

app.use(cors());

app.listen(PORT, HOST, (error) => {
  if (error) {
    console.log("Server error, couldn't start the app.");
    return;
  }
  console.log(`Server started at port ${PORT} on ${HOST}.`);
});
