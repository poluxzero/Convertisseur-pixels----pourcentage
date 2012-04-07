// Write into "ul.apercu li" differents informations we need (width in pixels & %) 
// Data must contain the name of the input we're modifiying (String "partie_0")
function lewrite (data) {
	// Witch input is that ?
	dataInput = $("input[name="+data+"]").val(),

	// dataInput associed with with "ul.apercu li" ?
	dataPartie = $("#"+data);
	
	// Now we can write what we want
	$(dataPartie).html(dataInput+"px<br />"+px2prct(dataInput)+"%");
}

// Function that show us how many space we have left on .apercu
function widthLeft () {
	var partieWidth = 0;
	var parentWidth = $(".apercu").width();
	// for each li into .apercu
	jQuery(".apercu li").each(function (i, elem) {
		// Adding elem.width()'s value into var
		partieWidth += $(elem).width();
	});
	// returning. Not into the future.
	return parentWidth - partieWidth;
}

// Function that allow me to put a random background-color on my li.partie
function randomBgc () {
	// IV my people
	colorz = new Array ("aqua", "blue", "fuchsia", "gray", "grey", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow");
	// Random number seen on http://www.javascriptkit.com/javatutors/randomnum.shtml
	return colorz[Math.floor(Math.random()*colorz.length+1)];
}

// Most important function : dat convertor
function px2prct (data) {
	var prct = 0,
		prct = data / $("#total").val() * 100;
	return Math.round(prct*100)/100;
}
