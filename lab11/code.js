'use strict';
function getMovieInfo(movieArr) {
    // $('#results').html(JSON.stringify(movieArr.results))
    movieArr.results.forEach((movie,index) => {
        $('#results').append(`<div>
            <div class = "movie_title"><h3>${movie.original_title}</h3></div>
            <div class = "movie_overview">${movie.overview}</div><br>
            <img class = "movie_img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" ><br>
            <button id = "button_${index}">backdrop image!</button>
        </div>`)
    })
    $('button').click((button)=>{
        if (button.target.id === 'y'){
            return;
        }
        else {
            $('#backdrop_img').html(`<img class = "bdr_img" src="https://image.tmdb.org/t/p/w500/${movieArr.results[button.target.id.slice(7)].backdrop_path}" ><br>`)
        }
    });
}
function init_ajax(){
    $('#results').html('')
    $('#backdrop_img').html('')
    const x = $('#x').val()
    $.ajax({
        url:`https://api.themoviedb.org/3/search/movie?api_key=a467db69048c41114e360cf1b32a063f&language=en-US&query=${x}&page=1&include_adult=false`,
        type: "GET",
        success: getMovieInfo
    })
}
function setup() {
    $('#y').click(init_ajax);
}
$(document).ready(setup)