const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const app = express();
const Depth1 = require("./routes/Depth1");
const path = require("path");

// const finalPath = path.join(__dirname, "./public/index.html");
// const finalPath = path.join(__dirname, "./public/build/index.html");

app.use(cors());
app.use(express.json());
app.use("/Depth1", Depth1);

// 리액트 빌드파일을 서버에 제공
app.use(express.static(path.join(__dirname, "/public/build")));
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
