import Movie from "/scripts/Movie.js";

let searchBarInput = document.querySelector('.searchbar__input')
let dataContainer = document.querySelector('.main__data')
const addBtn = document.getElementById('add-btn')
const removeBtn = document.getElementById('remove-btn')


document.addEventListener('click', function(e) {
    if (e.target.classList.contains('searchbar__btn')) {
        handleSearchClick()
    } else if (e.target.id === 'add-btn'){
        e.preventDefault()
        handleAddClick()
    } else if (e.target.id === 'remove-btn') {
        e.preventDefault()
        handleRemoveClick()
    }
})

function handleSearchClick() {
    fetch(`http://www.omdbapi.com/?s=${searchBarInput.value}&apikey=6ddaabc`)
        .then(res => res.json())
        .then(data => {
            if (data.Response == 'False') {
                document.querySelector('.main__data__initial').textContent = 'Sorry, we couldn\'t find what you\'re looking for. Try somethiing else!'
            } else {
                dataContainer.innerHTML = ''
                let moviesArray = data.Search
                moviesArray.forEach(movie => {
                    fetch(`http://www.omdbapi.com/?t=${movie.Title}&apikey=6ddaabc`)
                        .then(res => res.json())
                        .then(data => {
                            dataContainer.innerHTML += new Movie(data).getMovieHtml()
                        })
                })
            }    
        })
        searchBarInput.value = ''
}

function handleAddClick() {
    console.log('added')
    addBtn.classList.add('hidden')
    removeBtn.classList.remove('hidden')
    
}

function handleRemoveClick() {
    console.log('removed')
    addBtn.classList.remove('hidden')
    removeBtn.classList.add('hiden')
}




