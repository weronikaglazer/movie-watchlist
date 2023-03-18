import Movie from "/scripts/Movie.js";

let searchBarInput = document.querySelector('.searchbar__input')
let dataContainer = document.querySelector('.main__data')



document.addEventListener('click', function(e) {
    if (e.target.classList.contains('searchbar__btn')) {
        handleSearchClick()
    } else if (e.target.dataset.addbtn){
        e.preventDefault()
        handleAddClick(e.target.dataset.addbtn)
    } else if (e.target.dataset.removebtn) {
        e.preventDefault()
        handleRemoveClick(e.target.dataset.removebtn)
    }
})

function handleSearchClick() {
    fetch(`https://www.omdbapi.com/?s=${searchBarInput.value}&apikey=6ddaabc`)
        .then(res => res.json())
        .then(data => {
            if (data.Response == 'False') {
                document.querySelector('.main__data__initial').textContent = 'Sorry, we couldn\'t find what you\'re looking for. Try somethiing else!'
            } else {
                dataContainer.innerHTML = ''
                let moviesArray = data.Search

                moviesArray.forEach(movie => {
                    fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=6ddaabc`)
                        .then(res => res.json())
                        .then(data => {
                            if (data.Response !== 'False' && data.Plot !== 'N/A' && data.Poster !== 'N/A') {
                                dataContainer.innerHTML += new Movie(data).getMovieHtml()
                            }
                            
                        })
                })
            }    
        })
        searchBarInput.value = ''
}

function handleAddClick(movieId) {
    document.querySelector(`[data-addbtn="${movieId}"]`).classList.add('hidden')
    document.querySelector(`[data-removebtn="${movieId}"]`).classList.remove('hidden')

    fetch(`https://www.omdbapi.com/?i=${movieId}&apikey=6ddaabc`)
        .then(res => res.json())
        .then(data => {
            localStorage.setItem(movieId, JSON.stringify(data))             
        })
}

export default function handleRemoveClick(movieId) {
    document.querySelector(`[data-addbtn="${movieId}"]`).classList.remove('hidden')
    document.querySelector(`[data-removebtn="${movieId}"]`).classList.add('hidden')
    localStorage.removeItem(movieId)
}




