const API_KEY = "f81980ff410e46f422d64ddf3a56dddd";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&width_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&width_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&width_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&width_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&width_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&width_genres=99`,
};

export default requests;

//https://api.themoviedb.org/3/trending/all/week?api_key=f81980ff410e46f422d64ddf3a56dddd&language=en-US
