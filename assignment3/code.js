let page_size;
let num_of_page;
let movies_arr;
let crr_page_num = 0
let search_keyword = ""

const get_backdrop_img = (event) => {

    const backdrop_path = event.target.id
    $('#backdrop_img').html(`<img src = "https://image.tmdb.org/t/p/w500/${backdrop_path}"></img>`)

}

const change_page_size = () => {

    const crr_search_keyword = $('#movie_title').val()
    
    if (search_keyword === crr_search_keyword) {

        call_ajax()
    
    }
    else {

        $('#results').empty()
        $('#page_buttons').empty()
        $('#backdrop_img').empty()

        crr_page_num = 0
        page_size = +($('#page_size').val())
        num_of_page = Math.ceil(movies_arr.length/page_size)

        while(++crr_page_num <= num_of_page){

            $('#page_buttons').append(`<button id = 'page_${crr_page_num}' class = "page_btn">${crr_page_num}</button>`)
        
        }
        crr_page_num = 1
        let movie_info = ""

        for (let movie in movies_arr) {
            
            const movie_crr_i = +(movie)+page_size*(crr_page_num -1)

            if (movie < page_size && movie_crr_i <20){

                movie_info += 
                `<div id = "movie_${movie_crr_i}" class = 'movie_info'>
                <span>${movies_arr[movie_crr_i].original_title}</span>
                <span>${movies_arr[movie_crr_i].overview}</span>
                <img src = "https://image.tmdb.org/t/p/w500/${movies_arr[movie_crr_i].poster_path}">
                <button id = "${movies_arr[movie_crr_i].backdrop_path}" class = "backdrop_btn" >Backdrop Image!</button>
                </div>`
            
            }
        }

        $('#results').append(
            `<div>
                ${movie_info}
            </div>`)

    } 

}

const change_movie_info = (event) => {

    $('#results').empty()
    $('#backdrop_img').empty()

    crr_page_num = +(event.target.id.split('_')[1])
    let movie_info = ""

    for (let movie in movies_arr) {
        
        const movie_crr_i = +(movie)+page_size*(crr_page_num -1)

        if (movie < page_size && movie_crr_i <20){

            movie_info += 
            `<div id = "movie_${movie_crr_i}" class = 'movie_info'>
            <span>${movies_arr[movie_crr_i].original_title}</span>
            <span>${movies_arr[movie_crr_i].overview}</span>
            <img src = "https://image.tmdb.org/t/p/w500/${movies_arr[movie_crr_i].poster_path}">
            <button id = "${movies_arr[movie_crr_i].backdrop_path}" class = "backdrop_btn" >Backdrop Image!</button>
            </div>`
        
        }
    }

    $('#results').append(
        `<div>
            ${movie_info}
        </div>`)
    
}

const get_movie_info = (movies_data) => {

    $('#results').empty()
    $('#page_buttons').empty()
    $('#backdrop_img').empty()

    page_size = +($('#page_size').val())
    crr_page_num = 0
    movies_arr = movies_data.results
    num_of_page = Math.ceil(movies_arr.length/page_size)
    let movie_info = ""

    while(++crr_page_num <= num_of_page){

        $('#page_buttons').append(`<button id = 'page_${crr_page_num}' class = "page_btn">${crr_page_num}</button>`)
    
    }

    for (let movie in movies_arr) {

        if (movie < page_size){
        
            movie_info += 
            `<div id = "movie_${movie}" class = 'movie_info'>
            <span>${movies_arr[movie].original_title}</span>
            <span>${movies_arr[movie].overview}</span>
            <img src = "https://image.tmdb.org/t/p/w500/${movies_arr[movie].poster_path}">
            <button id = "${movies_arr[movie].backdrop_path}" class = "backdrop_btn" >Backdrop Image!</button>
            </div>`
        
        }
    }

    $('#results').append(
        `<div>
            ${movie_info}
        </div>`)

}

const call_ajax = () => {

    search_keyword = $('#movie_title').val()
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=a467db69048c41114e360cf1b32a063f&language=en-US&query=${search_keyword}&page=1&include_adult=false`,
        type: 'GET',
        success: get_movie_info

    })

}

const setup = () => {

    $('#search_button').click(call_ajax)
    $('#page_size').change(change_page_size)
    $("body").on("click", ".backdrop_btn", get_backdrop_img)
    $('body').on("click", ".page_btn", change_movie_info)

}

$(document).ready(setup)