
$(document).ready(function () {
    $('#formulaire-courts').submit(function (event) {
        event.preventDefault(); // Pour empecher le comportement par defaut de l'evnmnt de soumission
        $("#liste-courts").append("<li><a href=\"#\">" + $('#nom').val() + "</a></li>");// ajoute un courts a la liste avec le nom
    });
});