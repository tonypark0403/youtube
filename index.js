import "./src/db";
import "./src/models/Comment";
import "./src/models/Video";
import dotenv from "dotenv";
import app from "./src/app";

dotenv.config();

const PORT = process.env.PORT || 8888;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);

// practice
// const handleHome = (req, res) => {
//   res.send("Hello from home");
// };
// const handleProfile = (req, res) => res.send("You are on my profile");
// const middleware = (req, res, next) => {
//   if (req) {
//     next();
//   }
//   res.send("something happen in some case");
// };
