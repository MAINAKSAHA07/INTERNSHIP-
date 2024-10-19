const express = require('express');
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const url  = "mongodb+srv://Shadow:Shadow098@cluster0.triozcm.mongodb.net/?retryWrites=true&w=majority"
const Phrases = require('./Phrases')
mongoose.connect("mongodb+srv://Shadow:Shadow098@cluster0.wok7l.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser:true, 
    useUnifiedTopology:true
  }
);
// Phrases.find({},function(err,data){
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log(data),
//     res.send(data)
//   }
// })

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.get('/', (req, res) => {
  Phrases.find({}, (err, data) => {
    if (err) {
      console.log(err)
    }
    if (data) {
      // console.log(data)
      res.send(data)
    }
  })
})
app.post('/find',(req,res)=>{
  const val2 = "Good Afternoon"
  // const query = {"$search" :"(\"{}\"".format(val2)}
  console.log(req.body.w.toString())
  console.log(req.body.n.toString())
  Phrases.findOne({value:req.body.n.toString()},(err,data)=>{
    if (err) {
      console.log(err)
    }
    if (data) {
      console.log(data)
      res.send(data)
    }
  })
})
app.listen(8080, () => {
  console.log("BE started at port", (8080))
})
// module.export = data
// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// const cors = require("cors")
// const mongoose = require("mongoose")
// const axios = require('axios')

// const app = express();
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())
// const PORT = 8080;
// const db = "mongodb+srv://Shadow:Shadow123@cluster0.mhqwuuq.mongodb.net/Test?retryWrites=true&w=majority";
// mongoose.connect(db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, (err) => {
//   if (err) {
//     console.log(err)
//   }
//   else {
//     console.log('DB connected')
//   }
// })
// const PhaseSchema = new mongoose.Schema(
//   {
//     for: String,
//     Content: String
//   }
// )
// const PB = new mongoose.model('PB', PhaseSchema)

// app.get('/', (req, res) => {
//   PB.find({ for: "Greetings" }, (err, wordlist) => {
//     if (err) {
//       console.log(err)
//     }
//     if (wordlist) {
//       console.log(wordlist)
//     }
//   })
//   // PB.insert(
//   //   {
//   //     "for":"Hello"

//   //   }
//   // )
// })
// app.listen(PORT, () => {
//   console.log("BE started at port", (PORT))
// })

// module.exports = app;
