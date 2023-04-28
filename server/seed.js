require('dotenv').config();
const mongoose = require('mongoose');
const { MONGODB_URI } = require('./config/env/development');



let con = mongoose.connect(`${MONGODB_URI}?retryWrites=false`, {
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

  
  const seedUsers  = require("../server/seeder/users");

async function init() {

  await seedUsers()

  exit();
}
function exit() {
  console.log('exiting')
  process.exit(1)
}
