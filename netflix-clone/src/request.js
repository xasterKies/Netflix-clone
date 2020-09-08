const API_KEY = "010cf02106be78cd97145ccefed2ec7d";

const requests = {
    fetchTrending: '/trending/all/week!api_key=${API_KEY}&language=en-US',
    fetchNetflixOriginals: '/discover/tv?api_key=${API_KEY}&with_networks=213',
    fetchTopRated: '/movie/top-related?api_key=${API_KEY}&language=en-US',
    fetchActionMovies: '/discover/movie?api_key=${API_KEY}&with_genres=28',
    fetchComedyMovies: '/discover/movie?api_key=${API_KEY}&with_genres=35',
    fetchActionMovies: '/discover/movie?api-keys${API_KEY}&with_genres=28'

}