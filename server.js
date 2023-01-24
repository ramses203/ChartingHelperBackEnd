const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
const Depth1 = require("./routes/Depth1");

app.use(cors());
app.use(express.json());
app.use("/Depth1", Depth1);

// 리액트 빌드파일을 서버에 제공
// app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
