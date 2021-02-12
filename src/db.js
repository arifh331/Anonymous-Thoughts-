const mongoose = require('mongoose');

//using mongoose models
//This is the schema or the model of the data entry objects 
//so each review has a name, cln(class name),semester...
const ReviewSchema = mongoose.Schema({
  name: String,
  cln: String,
  semester: String,
  year: String,
  review: String,
});

mongoose.model('Review', ReviewSchema);

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/hw08', (err, database) => {
  if (err) {
    return console.log(err);
  } else {
    console.log('Connected to database'); 
    
  }
});
