class Movie {
    constructor(data) {
        this.title = data.Title
        this.poster = data.Poster
        this.rating = data.imdbRating
        this.runtime = data.Runtime
        this.plot = data.Plot
        this.genre = data.Genre
    }

    getMovieHtml() {
        return `html here`
    }
}