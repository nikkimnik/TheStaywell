import express from 'express
import cors from 'cors'

const app = express();
app.use(cors())
const port = 3000;

app.get('/', (req, res) => {
  return res.json("Home")
})

app.get('/contactus', (req, res) => {
  return res.json(data)
})

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});
