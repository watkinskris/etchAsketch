function gridSetUp () {
    var rows = 10;
    var cols = 10;
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
