const mongoose = require("mongoose");

//const dbUrl = `mongodb://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?authSource=testdb`;
const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;

//set up Schema and model
const PetSchema = new mongoose.Schema({
  name: String,
  type: String,
  breed: String,
  age: Number
});
const Pet = mongoose.model("Pet", PetSchema);

//MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); //connect to mongodb
}

//Get all pets from the pets collection
async function getPets() {
  await connect();
  return await Pet.find({}); //return array for find all
}
//Initialize pets collection with some data.
async function initializePets() {
  await connect();
  const petList = [
    {
      name: "Mittens",
      type: "cat",
      breed: "Norwegian forest cat",
      age: 5
    },
    {
      name: "Max",
      type: "dog",
      breed: "German Shepherd",
      age: 9
    },
    {
      name: "Fred",
      type: "fish",
      breed: "Koi",
      age: 2
    }
  ];
  await Pet.insertMany(petList);
}
//Function to add one pet.
async function addPet(petName, petType, petBreed, petAge) {
  await connect();
  let pet = new Pet({
    name: petName,
    type: petType,
    breed: petBreed,
    age: petAge
  });
  await pet.save(); //this line is the one that saves to the DB
}
//Function to update pet name.
async function updateName(oldName, newName) {
  await connect();
  await Pet.updateOne(
    { name: oldName },
    { name: newName }
  );
}


module.exports = {
  getPets,
  initializePets,
  addPet,
  updateName
}