require('dotenv').config();
const mongoose = require('mongoose');
const Prices = require('./models/Prices');


let con = mongoose.connect('mongodb://localhost:27017/ebank', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).catch(err => {
  console.log(err);
  process.exit(1);
})
  .then(() => {
    console.log("connected to db in development environment");
    init()
  });

  

async function init() {
  exit();
}
function exit() {
  console.log('exiting')
  process.exit(1)
}
