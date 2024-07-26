const trakt = "https://api.trakt.tv"; //base URL for any Trakt API requests

/*
 * Functions for Trakt API requests.
 */
async function getTrendingMovies() {
  let reqUrl = `${trakt}/movies/trending?extended=full`;
  let response = await fetch(
    reqUrl,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  return await response.json();
}
async function getMovieStudios(imdbId) {
  let reqUrl = `${trakt}/movies/${imdbId}/studios`;
  let response = await fetch(
    reqUrl,
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "trakt-api-version": 2,
        "trakt-api-key": process.env.TRAKT_CLIENT_ID
      }
    }
  );
  return await response.json();
}

async function getMostWatchedShows() {
  let reqUrl = `${trakt}/shows/watched/all?limit=15&extended=full`;
  let response = await fetch(reqUrl, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "trakt-api-version": 2,
      "trakt-api-key": process.env.TRAKT_CLIENT_ID
    }
  });
  return await response.json();
}

//export the functions
module.exports = {
  getTrendingMovies,
  getMovieStudios,
  getMostWatchedShows
};