import  express  from "express";
const app = express()
const port = 8000       

import  bodyParser from 'body-parser'
app.use(bodyParser.json())



import * as match from './matches-routes.mjs'

app.get('/matches', match.getAll)
app.get('/matches/:id', match.get)
app.put('/matches/:id', match.update)
app.delete('/matches/:id', match.remove)
app.post('/matches', match.create)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})