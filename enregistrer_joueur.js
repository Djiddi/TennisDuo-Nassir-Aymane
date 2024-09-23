$(document).ready(function() {
    // Fonction pour ajouter un joueur à la liste des joueurs
    $('#formulaire-joueur').submit(function(event) {
        event.preventDefault();     
        $("#liste-joueurs").append("<li><a href=\"#\">" + $('#nom').val() + ' ' + $('#prénom').val() + "</a></li>");
    });

    // Fonction pour afficher la liste des joueurs
    var listejoueur = []; // Liste des joueur (simulée pour l'exemple)
    function afficherlistejoueur() {
        var listejoueurElement = $('#liste-joueurs'); //pour selectionner l'elmnt de la liste des joueurs dans le html
        listejoueurElement.empty(); // Effacer le contenu actuel de la liste

        // Parcourir la liste des arbitres et créer les éléments de liste pour chaque joueur
        listejoueur.forEach(function(joueur, index) {
            var joueurElement = $("<li>").text(joueur.nom + ", " + joueur.age + " ans");
            listejoueurElement.append(joueurElement);
        });
    }
    listejoueur.push({nom: "John Doe", age: 35});
    listejoueur.push({nom: "Jane Smith", age: 28});
    afficherlistejoueur();
   
});