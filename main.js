$(document).ready(function () {

    function gridSetup(v){
        
        var numOfSquares = v;
    
        var etchAsketch = $('.sketchPad');
    
        for(var i = 0; i < numOfSquares ; i++){
            var row = $('<div class = "row"></div>');

            etchAsketch.append(row);
        }
      
        for(var j = 0; j < numOfSquares; j++){
            column = $('<div class = "column"></div>');

            $('.row').append(column);
        }
      
    }

    gridSetup(16);


    function getGridSize(){
        var size = prompt('The etch-A-sketch may have between 1 and 100 squares per side.  How many squares per side would you like your etch-A-sketch to have?');

        while (x < 1 || x > 100) {
            alert('That is an invalid entry.  Please try again');
            x = prompt('The etch-A-sketch may have between 1 and 100 squares per side.  How many squares per side would you like your etch-A-sketch to have?');
        }

        gridSetup(size);
    }

    

});
