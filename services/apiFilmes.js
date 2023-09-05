const { default: axios } = require("axios");


const apiFilmes = axios.create({
    baseURL: 'http://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzc5Nzg2ZTc1YmQ2Y2FlYThkMzhmYzMzNDVhZWQ3NyIsInN1YiI6IjY0ZjY1Mjg5ZTBjYTdmMDEyZWI0YjM4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VvCF9BnBSunKVQ99rFV5Wxx2pg5mymqVE1Fo6nuphf0'
    }
})

export default apiFilmes