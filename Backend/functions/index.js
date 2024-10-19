/* eslint-disable */
const functions = require('firebase-functions');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const port = 4005 ||process.env.PORT   ;
// const url = 'mongodb+srv://Shadow:Shadow098@cluster0.triozcm.mongodb.net/?retryWrites=true&w=majority';
const Phrases = require('./Phrases');
const Dic =require('./Cats')
const Blogs =require('./Blogdata')
mongoose.connect('mongodb+srv://Shadow:Shadow098@cluster0.wok7l.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.get('/', (req, res) => {
    Phrases.find({}, (err, data) => {
        if (err) {
            console.log(err);
        }
        if (data) {
            // console.log(data)
            res.send(data);
        }
    })
})
app.post('/blogs', (req, res) => {
    console.log(req.body.w)
    Blogs.findOne({link: req.body.w.toString()}, (err, data) => {
        if (err) {
            console.log(err);
        }
        if (data) {
            console.log(data)
            res.send(data);
        }
    })
})
app.get('/blogslistings',(req,res)=>{
    Blogs.find({}, {title:1,summary:1,link:1,smimg:1}, (err, data) => {
        if (err) {
            console.log(err);
        }
        if (data) {
            // console.log(data)

            res.send(data);
        }
    })
})

app.post('/display', (req, res) =>{
    console.log(req.body.w.toString())
    Phrases.find({ language: req.body.w.toString() }, (err, data) => {
        if (err) {
            console.log(err);
        }
        if (data) {
            console.log(data);
            res.send(data);
        }
    })
})
app.get('/displayD', (req, res) =>{
  
    Dic.find({},{title:1 ,link:1,smimg:1}, (err, data) => {
        if (err) {
            console.log(err);
        }
        if (data) {
            console.log(data);
            res.send(data);
            res.end();
        }
    })
})
app.post('/contentD',(req,res)=>{
    console.log(req.body.w.toString())
    Dic.findOne({link:req.body.w.toString()},(err,data)=>{
        if(err){
            console.log(err)
          
            res.end()
        }
        if(data){
            console.log(data)
              res.send(data)
              res.end()
        }
    })
})

app.post('/find', (req, res) => {
    // const query = {'$search' :'(\'{}\''.format(val2)}
    console.log(req.body.w.toString())
    Phrases.findOne({ value: req.body.w.toString(), lang: req.body.l.toString() }, (err, data)=>{
        if (err) {
            console.log(err);
        }
        if (data) {
            console.log(data);
            res.send(data);
        }
    })
})
app.listen(port, () => {
    console.log('BE started at port', port);
})
exports.app = functions.https.onRequest(app);
/* eslint-disable */