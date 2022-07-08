
function process_response(data){
    console.log(data);
    $('#z').html(`Temperature in ${data.name} is ${data.main.temp}.`)
}
function init_ajax(){
    city_name = $('#x').val()
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=14f750320481167e3489bf316025849c&units=metric`,
        type: "GET",
        success: process_response
    })
}
function setup(){
    $("#y").click(init_ajax)
}
$(document).ready(setup)