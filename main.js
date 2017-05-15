$(document).ready(function () {

    function gridSetup(v){

        
        var numOfSquares = v;
    
        var etchAsketch = $('.sketchPad')
    
        for(var i = 0; i < numOfSquares ; i++){
            var row = $('<div class = "row"></div>');

            etchAsketch.append(row);
        }
      
        for(var j = 0; j < numOfSquares; j++){
            column = $('<div class = "column"></div>');

            $('.row').append(column);
        }
      
    }

    function newGrid(){
        var size = prompt('The etch-A-sketch may have between 1 and 100 squares per side.  How many squares per side would you like your etch-A-sketch to have?');

        while (size < 1 || size > 100) {
            alert('That is an invalid entry.  Please try again');
            size = prompt('The etch-A-sketch may have between 1 and 100 squares per side.  How many squares per side would you like your etch-A-sketch to have?');
        }

        $('.row').detach();
        gridSetup(size);
    }
    var originalSize = 16;

    gridSetup(originalSize);


    $('#newButton').on('click', function() {
        newGrid();
    });


});
