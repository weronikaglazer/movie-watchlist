import Movie from "/scripts/Movie.js";
import handleRemoveClick from "/scripts/index.js";
let dataContainer = document.querySelector('.main__data')
let clearBtn = document.querySelector('.main__clearbtn')

render()


document.addEventListener('click', function(e) {
    if (e.target.dataset.removebtn) {
        e.preventDefault()
        if (localStorage.length === 0) {
            handleRemoveClick(e.target.dataset.removebtn)
            location.reload()
            render()
        } else {
            handleRemoveClick(e.target.dataset.removebtn)
            render()
        }
        
    } else if (e.target.classList.contains('main__clearbtn')) {
        localStorage.clear()
        clearBtn.classList.add('hidden')
        location.reload()
        render()
    }
})


function render() {
    if (localStorage.length > 0) {
        dataContainer.innerHTML = ''
        clearBtn.classList.remove('hidden')
        for (let movieId in localStorage) {
            if (movieId.startsWith('tt')) {
                const movie = JSON.parse(localStorage.getItem(movieId))
                dataContainer.innerHTML += new Movie(movie).getAddedMovieHtml()
            }
        }
    } else {
        dataContainer.innerHTML = `
            <div class="main__data__initial">
                <img src="/images/icons/no-data.png">
                <p>Add your first movie!</p>
            </div>
        `
    }
}