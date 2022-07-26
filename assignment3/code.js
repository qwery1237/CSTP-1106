let page_size;

const change_page_size = () => {

    page_size = $('#page_size').val()

}

const get_movie_info = (moviearr) => {

    page_size = $('#page_size').val()
    console.log(JSON.stringify(moviearr),page_size)
    $('#page_size').change(change_page_size)

}

const call_ajax = () => {

    const movie_name = $('#movie_title').val()

    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=a467db69048c41114e360cf1b32a063f&language=en-US&query=${movie_name}&page=1&include_adult=false`,
        type: 'GET',
        success: get_movie_info

    })

}

const setup = () => {

    $('#search_button').click(call_ajax)
    
}

$(document).ready(setup)