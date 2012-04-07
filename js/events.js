// Quand on change la valeur du #total
jQuery("#total").change(function () {
	// On récupère sa valeur
	var pxTotal = $(this).val();
	// On change la taille du <ul> qui englobe les li
	$(".apercu").css('width',pxTotal);
	// S'il n'y a pas de .partie
	if ($(".partie").length == 0) {
		// On créé le premier input
		$(".liste_parties").append("<br /><input class='partie' name='partie_0' value='60' placeholder='Largeur d\'un des child' />");
		// On ajoute le premier <li>
		$(".apercu").append("<li style='background-color:"+randomBgc()+"' id='partie_0'>Pouet</li>");
		lewrite("partie_0")
		// On ajoute le bouton d'ajout d'input
		$(".liste_parties").after('<br /><br /><input type="button" id="add" value="Ajouter un input" />');
	}
});

// Pour chaque .partie dont la valeur change
jQuery(".partie").live('change', function () {
	var elem = $(this),
	// On récupère l'attr name de ce qu'on est en train de changer
	partieID = elem.attr("name");
	// On récupère sa valeur
	partieVAL = elem.val();
	// On change dans le ul sa taille
	lewrite(partieID);
	$(".apercu #" + partieID).css("width",partieVAL);
});

// Quand on clique sur le bouton "ajouter"
jQuery("#add").live('click', function() {
	// On récupère le nombre de .partie
	var totalPartie = $(".partie").length;
	// On ajoute un input à configurer
	$(".liste_parties").append("<br /><input class='partie' name='partie_"+totalPartie+"' value='60' /><br />");
	// On ajoute un <li> dans la liste de l'apercu
	$(".apercu").append("<li style='background-color:"+randomBgc()+"' id='partie_"+totalPartie+"'></li>");
	lewrite("partie_"+totalPartie)
});
