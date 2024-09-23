// Code pour ajouter un joueur et afficher les arbitres
$(document).ready(function() {
    // Fonction pour ajouter un arbitre à la liste des arbitres
    $('#formulaire-arbitres').submit(function(event) { // Selectionne le formulaire ave l'id #for.... il ajoute un gestionnaire 
                                                         // d'evnmnt pour l'evnment de soumission submit.
        event.preventDefault(); // Cela empêche le comportement par défaut de l'événement de soumission du formulaire, qui est le rechargement de la page.
        $("#liste-arbitres").append("<li><a href=\"#\">" + $('#nom').val() + ' ' + $('#prénom').val() + "</a></li>");
    });   // Cela ajoute un élément de liste à la liste des arbitres avec le nom et le prénom saisis dans le formulaire.
 
    // Fonction pour afficher la liste des arbitres
    var listeArbitres = []; // Liste des arbitres
    function afficherListeArbitres() {
        var listeArbitresElement = $('#liste-arbitres'); //Cela sélectionne l'élément de liste des arbitres dans le document HTML.
        listeArbitresElement.empty(); // Effacer le contenu actuel de la liste

        // Parcourir la liste des arbitres et créer les éléments de liste pour chaque arbitre
        listeArbitres.forEach(function(arbitre, index) { 
            var arbitreElement = $("<li>").text(arbitre.nom + ", " + arbitre.age + " ans");
            listeArbitresElement.append(arbitreElement);
        });
    }
    listeArbitres.push({nom: "Joseph Doe", age: 35}); //Cela ajoute un arbitre à la liste des arbitres.
    listeArbitres.push({nom: "Aurélien Smith", age: 28});
    afficherListeArbitres();
   
});