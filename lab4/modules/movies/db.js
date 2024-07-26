const mongoose = require("mongoose");

const dbUrl = `mongodb://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}/?authSource=moviedb`;
// const dbUrl = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPWD}@${process.env.DBHOST}`;
// mongodb://moviedbuser:Test123!!@localhost:27017/?authSource=moviedb
console.log(dbUrl)

//set up Schema and model
const MovieSchema = new mongoose.Schema({
  title: String,
  year: Date,
  rating: String
});
const Movie = mongoose.model("Movie", MovieSchema);

//MONGODB FUNCTIONS
async function connect() {
  await mongoose.connect(dbUrl); //connect to mongodb
}

//Get all pets from the pets collection
async function getMovies() {
  await connect();
  return await Movie.find({}); //return array for find all
}
//Initialize pets collection with some data.
async function initializeMovies() {
  await connect();
  const movieList = [
    {
        title: 'The Shawshank Redemption',
        year: new Date('1994-09-23'),
        rating: 'R'
      },
      {
        title: 'The Godfather',
        year: new Date('1972-03-24'),
        rating: 'R'
      },
      {
        title: 'The Dark Knight',
        year: new Date('2008-07-18'),
        rating: 'PG-13'
      }
  ];
  await Movie.insertMany(movieList);
}
//Function to add one pet.
async function addMovie(movieTitle,movieYear,movieRating) {
  await connect();
  let movie = new Movie({
    title: movieTitle,
    year: movieYear,
    rating: movieRating
  });
  await movie.save(); //this line is the one that saves to the DB
}
//Function to update pet name.
async function updateRating(oldRating, newRating) {
  await connect();
  await Movie.updateOne(
    { rating: oldRating },
    { rating: newRating }
  );
}

//Function to delete movie by rating
async function deleteMoviesByRating(rating) {
    await connect();
    await Movie.deleteMany(
      {rating:rating}
    );
  }


module.exports = {
  getMovies,
  initializeMovies,
  addMovie,
  updateRating,
  deleteMoviesByRating
}