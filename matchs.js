function validateForm(event) {
    event.preventDefault(); // Empêche le comportement par défaut du formulaire
    var joueur1 = document.getElementById("joueur1").value; //pour récupèrer la valeur du champ de formulaire avec l'ID joueur1
    var joueur2 = document.getElementById("joueur2").value;
    var joueur2Error = document.getElementById("joueur2-error"); //récupère l'élément qui affiche les messages d'erreur pour le champ "joueur2"

    if (joueur1 === joueur2) {
        joueur2Error.textContent = "Un seul joueur ne peut pas jouer. Veuillez sélectionner deux joueurs différents.";
        return false;
    } else {
        joueur2Error.textContent = "";
        addMatchToList(); // Appel à la fonction pour ajouter le match à la liste
        return true;
    }
} //l'utilisation de === garantit que non seulement les valeurs des joueurs sont égales, mais aussi leurs types


function addMatchToList() { //C'est une fonction qui ajoute les données du match à une liste.
    var tournoi = document.getElementById("tournoi").value; //récupère la valeur du champ de formulaire avec l'ID "tournoi".
    var date = document.getElementById("date").value;
    var joueur1 = document.getElementById("joueur1").value;
    var joueur2 = document.getElementById("joueur2").value;
    var arbitre = document.getElementById("arbitre").value;
    var court = document.getElementById("court").value;

    var matchList = document.getElementById("matchs-list");//Cela récupère l'élément de liste où les données du match seront ajoutées.

    var listItem = document.createElement("li");//Cela crée un nouvel élément de liste
    listItem.textContent = "Tournoi: " + tournoi;// définit le texte à afficher dans l'élément de liste pour indiquer le tournoi.
    matchList.appendChild(listItem);//ajoute l'élément de liste à la liste des matchs.

    listItem = document.createElement("li");
    listItem.textContent = "Date: " + date;
    matchList.appendChild(listItem);

    listItem = document.createElement("li");
    listItem.textContent =  joueur1 + " vs " + joueur2;
    matchList.appendChild(listItem);

    listItem = document.createElement("li");
    listItem.textContent = "Arbitre: " + arbitre;
    matchList.appendChild(listItem);

    listItem = document.createElement("li");
    listItem.textContent = "Court: " + court;
    matchList.appendChild(listItem);
}


//En résumé, ces fonctions gèrent la validation du formulaire 
// et l'ajout des données du match à une liste lorsque le formulaire est soumis.