function getGridSize(){
    var x = prompt('How big would you like the drawing area to be: ')

    gridSetUp(x, x);
}

function gridSetUp (x, y) {
    var rows = x;
    var cols = y;
    var html ="";

    for (var i = 0; i < rows; i++){
        html += '<tr>';

        for (var j = 0; j < cols; j++){
            html += '<td>' + '</td>';
        }

        html += '</tr>';
    }

    document.getElementById('sketchPad').innerHTML += html;
}
