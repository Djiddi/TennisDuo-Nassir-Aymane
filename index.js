document.getElementById("loginForm").addEventListener("submit", function(event) {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  

  if (!username || !password) {
    event.preventDefault(); // Empêche la soumission du formulaire
    alert("Veuillez saisir votre nom d'utilisateur et votre mot de passe.");
  }
});

