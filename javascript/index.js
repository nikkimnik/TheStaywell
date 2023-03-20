const express = require("express");
const app = express();
const port = 3111;
const cors = require("cors");

app.use(expess.urlencoded{extended: true}))
app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});
