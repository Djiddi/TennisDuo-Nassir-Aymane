$(document).ready(function() {
    // Fonction pour vérifier la saisie du nom d'utilisateur
    $("#username").on("input", function() {
      var usernameInput = $(this).val();
      var regex = /^[A-Za-z]+$/;
      if (!regex.test(usernameInput)) {
        $("#errorMessages").text("Le nom d'utilisateur ne peut contenir que des lettres de l'alphabet.");
      } else {
        $("#errorMessages").text("");
      }
    });
  
    // Fonction pour gérer la validation du formulaire au clic sur le bouton
    $("#loginButton").on("click", function() {
      var username = $("#username").val();
      var password = $("#password").val();
  
      if (!username || !password) {
        $("#errorMessages").text("Veuillez remplir tous les champs.");
      } else {
        var regex = /^[A-Za-z]+$/;
        if (!regex.test(username)) {
          $("#errorMessages").text("Le nom d'utilisateur ne peut contenir que des lettres de l'alphabet.");
        } else {
          // Le formulaire est valide, vous pouvez soumettre les données ou effectuer d'autres actions ici
          $("#errorMessages").text("");
          alert("Formulaire valide. Soumission des données...");
          // Code pour soumettre les données du formulaire ou effectuer une autre action
        }
      }
    });
  });
  
  