let coordinates = {}

$(document).ready(function () {
    get_coordinates();
})

function get_coordinates() {
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('source') && searchParams.has('destination')) {
        let source = searchParams.get('source')
        let destination = searchParams.get('destination')
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]
        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lon = destination.split(";")[1]
        temp_set_text();
    } else {
        alert("Coordinates not selected!")
        window.history.back();
    }
}

function temp_set_text(){
    $("#lat").html("Destination Latitude: "+coordinates.destination_lat);
    $("#long").html("Destination Longitude: "+coordinates.destination_lon);
}