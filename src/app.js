//Arif Howlader 
//this code was built of a homework from Joseph Versoza 


const DEFAULT_AIT_PORT = 3000;

// express
const express = require('express');
const app = express();

// database setup
require('./db');
const mongoose = require('mongoose');



// static files
//serving static files from the public folder 
const path = require("path");
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// body parser
//so we can use req.body
app.use(express.urlencoded({ extended: false }));

//Don't need to set the view engine to handlebar since this uses xhr rquests 
//app.set('view engine', 'hbs');

const Review = mongoose.model('Review');

app.get('/api/messages', function(req, res) {
  // Retrieving or filtering all the reviews from the data base 
  // send back as JSON list
  // then in main.js we will turn or filter that for the front end


  let reqi = req.query;
  console.log(reqi);
  console.log("print")

  //pob is the object we are going to pass into the mongose find mehtod
  //it will find all the entries that matches the terms 
  let pob = {}
  let emt = '';

  //checking if the query is empty or length of zero
  if (isEmpty(reqi)) {
     pob ={}
  }

  else {
    //In the case that there is a filter that exists for year, we are are adding this to the 
    //pob req object 
    if (reqi.year!=emt&&reqi.year!=undefined){
      pob.year = reqi.year
    }
    //In the case, that there is a semster specified in the filter query 
    //add it to the pob request object 
    if (reqi.semester!=emt&&reqi.semester!=undefined){
      pob.semester=reqi.semester
    }
  }
  
  
  //Sending the pob object that was defined with the filter queries 
  //and pass into the mongo Review.find method 
  //you will get returned the vartores object that has 
  //all the found entries

  Review.find(pob,function(err,vartores,count){
    if (err){
      console.log(err);
    }
    else{
      //res.json is sending the results in json format as body to the front end 
      res.json(vartores);
    }
  })

});


//handler for when an entry is posted 
app.post('/api/message', (req, res) => {
  // 
  // representation of saved object
 console.log("Print from post router")
let rqb =req.body
//create a new review object
let nrm = new Review({name:rqb.name, cln:rqb.cln, semester:rqb.semester,year:rqb.year,review:rqb.review})


//saves the created document and there is a a callback function
nrm.save(function(err,doc){
  if (err){
    res.json({error:"There was an error"})
  }
  else{
    
    //// res.json sens the json of the created review objec to the back end
    res.json(doc)
    console.log("sent")
  }
})

});

app.listen(process.env.PORT || DEFAULT_AIT_PORT, (err) => {
  console.log('Server started (ctrl + c to shut down)');
});


function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
