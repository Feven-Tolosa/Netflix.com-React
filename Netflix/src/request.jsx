const API_KEY = "8fb17e5bb4251925f123b5655ac066b9";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fatchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fatchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fatchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fatchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fatchDocumenteriesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
