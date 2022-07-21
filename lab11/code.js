'use strict';
const setup = () => $('#x').click(search_)
const search_ = () => {
    const y = $('#y').val() ;
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=a467db69048c41114e360cf1b32a063f&language=en-US&query=${y}&page=1&include_adult=false`,
        type: 'get',
        success: process_res
    })
}
function process_res (data) {

    console.log(data);
    $('#result').append(`<span>${JSON.stringify(data)}</span>`)
    // for (i = 0; i < data.results.length; i++){
    //     $("#result").append(JSON.stringify(data.results[i].original_title) + "<br>")
    //     $("#result").append(JSON.stringify(data.results[i].overview) + "<br><br>")
    //     $("#result").append(`<img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">`)
    // }
}
$(document).ready(setup)