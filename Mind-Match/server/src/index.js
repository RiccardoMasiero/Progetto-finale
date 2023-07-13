import express from "express";
import cors from 'cors';
import * as match from './matches-routes.mjs';
import bodyParser from 'body-parser';
const app = express()
const port = 8000
app.use(cors());
app.use(bodyParser.json())




app.get('/matches', match.getAll)
app.get('/matches/:id', match.get)
app.put('/matches/:id', match.update)
app.delete('/matches/:id', match.remove)
app.post('/matches', match.create)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})