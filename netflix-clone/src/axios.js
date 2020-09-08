import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/550?api_key=010cf02106be78cd97145ccefed2ec7d.org/3",
});


export default instance;