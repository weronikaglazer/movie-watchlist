class Movie {
    constructor(data) {
        this.title = data.Title
        this.poster = data.Poster
        this.rating = data.imdbRating
        this.runtime = data.Runtime
        this.plot = data.Plot
        this.genre = data.Genre
        this.id = data.imdbID
    }

    getMovieHtml() {
        return `
            <div class="main__data__movie">
                <img src="${this.poster}" class="main__data__movie__poster">
                <div>
                    <h1 class="main__data__movie__title">${this.title}</h1>
                    <p class="main__data__movie__rating">
                        <img src="/images/icons/star.png">
                        ${this.rating}
                    </p>

                    <button class="main__data__movie__btn " id="add-btn" data-addbtn="${this.id}">
                        <img src="/images/icons/add.png">
                        Watchlist
                    </button>
                    <button class="main__data__movie__btn hidden" id="remove-btn" data-removebtn="${this.id}">
                        <img src="/images/icons/remove.png">
                        Remove
                    </button>

                    <p class="main__data__movie__runtime">${this.runtime}</p>
                    <p class="main__data__movie__genre">${this.genre}</p>
                
            
                    <p class="main__data__movie__description">${this.plot}</p>
                </div>
            </div>
        `
    }

    getAddedMovieHtml() {
        return `
            <div class="main__data__movie">
                <img src="${this.poster}" class="main__data__movie__poster">
                <div>
                    <h1 class="main__data__movie__title">${this.title}</h1>
                    <p class="main__data__movie__rating">
                        <img src="/images/icons/star.png">
                        ${this.rating}
                    </p>

                    <button class="main__data__movie__btn hidden" id="add-btn" data-addbtn="${this.id}">
                        <img src="/images/icons/add.png">
                        Watchlist
                    </button>
                    <button class="main__data__movie__btn" id="remove-btn" data-removebtn="${this.id}">
                        <img src="/images/icons/remove.png">
                        Remove
                    </button>

                    <p class="main__data__movie__runtime">${this.runtime}</p>
                    <p class="main__data__movie__genre">${this.genre}</p>
                
            
                    <p class="main__data__movie__description">${this.plot}</p>
                </div>
            </div>
        `
    }
}

export default Movie