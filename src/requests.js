const api_key="3739dbbc40c3974622bb899a484c7559"

let requests={
    fetchTrending:`/trending/all/week?api_key=${api_key}&language=en-us`,
    fetchNetflixOrignals:`/discover/tv?api_key=${api_key}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${api_key}&with_genres=99`

}
export default requests;