alert("Wellcome to my page internet");

numberToFind = Math.floor(Math.random() * 100) + 1;
compt = 8;

do {
	number = prompt("Enter a number");

	if (returnValue < numberToFind)
		alert("The number is plus grand");
	else if
		alert("The number is plus petit");

	copmt -= 1;
}
while(number != numberToFind && compt > 0)

if (number == numberToFind)
	alert("You Win !");
else
	alert("You Lose ! Get out of my page internet, NOOB !!!");

function select( id, select )
{
	id.css("opacity", select);
	id.nextAll().toggle();
	

};

function display( id ) 
{
	$("#overlay").css("opacity", "0.5");
	$("img").css("pointer-events", "none");
	$("p").css("pointer-events", "none");
	src = id.attr("src");
	$("<img id='planet' src='" + src + "' />").insertAfter("#overlay");
	$("#planet").css({
		"position": "fixed",
		"top": "15%",
		"left": "35%"
	});
	$("#planet").animate({
		"height": "+=200",
		"width": "+=200"
	}, 500);
}

function erase()
{
	$("#overlay").css("opacity", "1");
	$("img").css("pointer-events", "");
	$("p").css("pointer-events", "");
	$("#planet").remove();
}

$("img").hover( function() { select($(this), "0.5") } , function() { select($(this), "1") } );
$("p").hover( function() { select($(this).prevAll(), "0.5") } , function() { select($(this).prevAll(), "1") } );
$("img").click( function(e) { e.stopPropagation(); display($(this)) } );
$("p").click( function(e) { e.stopPropagation(); display($(this).prevAll()) } );
$("#overlay").click( function() { erase() } )