const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
const Depth1 = require("./routes/Depth1");

app.use(express.json());
app.use(cors());

app.use("/Depth1", Depth1);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
