//var rows = 16;
//var columns = 16;
var $row = $("<div />", {
    class: 'row'
});
var $square = $("<div />", {
    class: 'square'
});

function getpad(rows, columns) {
	for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    for (var i = 0; i < rows; i++) {
        $("#wrapper").append($row.clone());
    }
};

function drawing() {
	$('.square').mouseenter(function() {
    	$(this).addClass("color_red");
    });
};

$(document).ready(function() {
	getpad(16,16);
    //$('.square').mouseleave(function() {
    	//$(this).removeClass("color_red");
    //});
	drawing();
	$('#button').click(function() {
		$row.empty();
		$('#wrapper').empty();
		var row = prompt("How many rows do you want?");
		var col = prompt("How many columns do you want?");
		getpad(row,col);
		drawing();
	});
});