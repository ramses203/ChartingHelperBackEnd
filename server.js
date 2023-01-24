const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const Depth1 = require("./routes/Depth1");

app.use(express.json());
app.use("/Depth1", Depth1);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
