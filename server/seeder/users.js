const User = require("../models/User");

async function seedUsers() {

  {let adminUser = new User();
  adminUser.companyName = "admin@gmail.com";
  adminUser.email = "admin@gmail.com";
  adminUser.setPassword("Asdf123");
  await adminUser.save();}


  console.log("Users seeded");
}

module.exports = seedUsers;
