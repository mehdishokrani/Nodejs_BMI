const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/BMI.html")
})

app.post("/",(req,res)=>{
    var height = (Number(parseInt(req.body.height)))/100
    var weight = Number(req.body.weight)
    var resultBMI = weight/(Math.pow(height,2))
    res.send(`BMI of height ${height}m with weight ${weight}kg is ${Math.round(resultBMI*100)/100}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})