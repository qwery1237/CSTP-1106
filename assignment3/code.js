let page_size;
let movies_arr;
let crr_page_num = 1
let num_of_page;

const content_empty = () => {

    $('#results').empty()
    $('#backdrop_img').empty()

}

const create_page_btn = () => {

    page_size = +($('#page_size').val())
    crr_page_num = 1
    num_of_page = Math.ceil(movies_arr.length/page_size)
    let page_num = 1

    $('#page_buttons').empty()
    $('#page_buttons').append(`<button id = 'page_first' class = "page_btn">First</button>`)
    $('#page_buttons').append(`<button id = 'page_prev' class = "page_btn">Prev.</button>`)

    while (page_num <= num_of_page) {

        $('#page_buttons').append(`<button id = 'page_${page_num}' class = "page_btn">${page_num}</button>`)
        page_num++

    }

    $('#page_buttons').append(`<button id = 'page_next' class = "page_btn">Next</button>`)
    $('#page_buttons').append(`<button id = 'page_last' class = "page_btn">Last</button>`)

}

const display_content = () =>{

    let movie_info = ""

    for (let movie in movies_arr) {
        
        const movie_crr_i = +(movie)+page_size*(crr_page_num -1)

        if (+movie < page_size && movie_crr_i <20) {

            movie_info += `
            <div id = "movie_${movie_crr_i}">
                <div class = 'movie_info'>
                    <span>#${movie_crr_i+1}</span>
                    <span>${movies_arr[movie_crr_i].original_title}</span>
                    <span>${movies_arr[movie_crr_i].overview}</span>
                    <img src = "https://image.tmdb.org/t/p/w500/${movies_arr[movie_crr_i].poster_path}">
                    <button id = 'backdrop_button_${movie_crr_i}' class = "backdrop_btn" >Backdrop Image!</button>
                </div>
                <div id="backdrop_img_${movie_crr_i}" class = "hidden ">
                    <img src = "https://image.tmdb.org/t/p/w500/${movies_arr[movie_crr_i].backdrop_path} " class = 'backdrop_img'>
                </div>
            </div>
            <hr>
            `
        
        }
        else {

            break

        }

    }

    $('#results').append(
        `<div id = 'movies'>
            ${movie_info}
        </div>`)

}

const get_backdrop_img = (event) => {
    const clicked_btn_num = event.target.id.split('_')[2]
    $(`#backdrop_img_${clicked_btn_num}`).toggle('hidden')
}

const change_page_size = () => {
    
    content_empty()
    create_page_btn()
    display_content()

}

const change_movie_info = (event) => {

    const clicked_btn = event.target.id.split('_')[1]

    switch (clicked_btn) {

        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7': 
            crr_page_num = +clicked_btn
            break
        case 'first':
            crr_page_num = 1
            break
        case 'last':
            crr_page_num = num_of_page
            break
        case 'prev':
            (crr_page_num > 1) ? crr_page_num-- : null
            break
        default:
            (crr_page_num < num_of_page) ? crr_page_num++ : null

    }

    content_empty()
    display_content()
    
}

const get_movie_info = (movies_data) => {

    movies_arr = movies_data.results

    content_empty()
    create_page_btn()
    display_content()

}

const call_ajax = () => {

    const search_keyword = $('#movie_title').val()
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