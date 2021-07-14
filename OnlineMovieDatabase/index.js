const titleSearchValue = document.querySelector('.title-search')
const yearSearchValue = document.querySelector('.year-search')
const optionButton = document.querySelector('.option-search')

const searchButton = document.querySelector('.find')
const refreshButton = document.querySelector('.refresh')

const body = document.querySelector('.body')
const posterImage = document.querySelector('.poster')
const movieContainer = document.querySelector('.movie-container')

// const favoriteMovies = []

searchButton.addEventListener('click', async (event) => {
    let movies

    if(titleSearchValue.value == '') {
        return
    }

    if(titleSearchValue.value != '' && yearSearchValue.value != '' && optionButton.value == 'full') {
        const url = `http://www.omdbapi.com/?t=${titleSearchValue.value}&y=${yearSearchValue.value}&plot=full&apikey=e14b2c19`
        const response = await fetch(url)
        movies = await response.json()
    } else if (titleSearchValue.value != '' && yearSearchValue.value != '' && optionButton.value == 'short') {
        const url = `http://www.omdbapi.com/?t=${titleSearchValue.value}&y=${yearSearchValue.value}&apikey=e14b2c19`
        const response = await fetch(url)
        movies = await response.json()
    } else if (titleSearchValue.value != '' && yearSearchValue.value == '' && optionButton.value == 'full') {
        const url = `http://www.omdbapi.com/?t=${titleSearchValue.value}&plot=full&apikey=e14b2c19`
        const response = await fetch(url)
        movies = await response.json()
    } else if (titleSearchValue.value != '' && yearSearchValue.value == '' && optionButton.value == 'short') {
        const url = `http://www.omdbapi.com/?t=${titleSearchValue.value}&apikey=e14b2c19`
        const response = await fetch(url)
        movies = await response.json()
    } else {
        const url = `http://www.omdbapi.com/?t=${titleSearchValue.value}&apikey=e14b2c19`
        const response = await fetch(url)
        movies = await response.json()
    }
    
    document.querySelector('.movie').innerHTML = `
        <div class="movie-container">
            <img src="${movies.Poster}" alt="" class="movie-poster">
            <div class="title-critic-container">
                <h2 class="movie-title">${movies.Title}</h2>
                <div class="critic-container">
                    <div class="imdb critic-logo">
                        <img src="./images/logo-imdb.png" alt="" class="imdb-logo">
                        <h2 class="critic-rating">"${movies.Ratings[0].Value}"</h2>
                    </div>
                    <div class="metacritic critic-logo">
                        <img src="./images/logo-metacritic.png" alt="" class="metacritic-logo">
                        <h2 class="critic-rating">"${movies.Metascore}"</h2>
                    </div>
                    <div class="rotten-tomatoes critic-logo">
                        <img src="./images/logo-rotten-tomatoes.png" alt="" class="rotten-logo"> 
                        <h2 class="critic-rating">"${movies.Ratings[1].Value}"</h2>
                    </div>
                </div>
            </div>
        </div>
    `

    document.querySelector('.plot').innerHTML = `
        <div class="plot-container">
            <h2 class="plot-text">Plot</h2>
            <h2 class="plot-info">${movies.Plot}</h2>
        </div>
    `
    document.querySelector('.details').innerHTML = `
        <div class="detail-contianer">
            <h2 class="detail-text">Details</h2>
            <div class="details-container">
                <div class="detail-title">
                    <h3>Year</h3>
                    <h3>Rated</h3>
                    <h3>Release</h3>
                    <h3>Runtime</h3>
                    <h3>Genre</h3>
                    <h3>Director</h3>
                    <h3>Writer</h3>
                    <h3>Awards</h3>
                    <h3>Box Office</h3>
                    <h3>Production</h3>
                </div>
                <div class="detail-info">
                    <h3>${movies.Year}</h3>
                    <h3>${movies.Rated}</h3>
                    <h3>${movies.Released}</h3>
                    <h3>${movies.Runtime}</h3>
                    <h3>${movies.Genre}</h3>
                    <h3>${movies.Director}</h3>
                    <h3>${movies.Writer}</h3>
                    <h3>${movies.Awards}</h3>
                    <h3>${movies.BoxOffice}</h3>
                    <h3>${movies.Production}</h3>
                </div>
            </div>
        </div>
    `

    titleSearchValue.value = ''
    yearSearchValue.value = ''
})

refreshButton.addEventListener('click', () => {
    document.querySelector('.movie').innerHTML = ''
    document.querySelector('.plot').innerHTML = ''
    document.querySelector('.details').innerHTML = ''
})