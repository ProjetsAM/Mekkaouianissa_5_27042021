onload = function () {
  console.log("je suis sur la page cart");
  const itemsTarget = document.getElementById ('order');
  const form = document.querySelector(".cart__order__form");
    
  // Récupérer l'element dans le HTML
  let inputFirstName = document.getElementById("firstName");
  let inputLastName = document.getElementById("lastName");
  let inputAdress = document.getElementById("adress");
  let inputCity = document.getElementById("city");
  let inputEmail = document.getElementById("email");  

  // Créer les variables pour le fichier
  let totalItems = document.getElementById("totalQuantity");
  let totalPrice = document.getElementById("totalPrice");

  // étape 2 : Function flechee 
  const displayTotalQuantity = () => {
    
    if (totalItems) {
      
      totalItems.innerText = "5";
    }
  };

  const displayTotalPrice = () => {
    if (totalPrice) {
      
      totalPrice.innerHTML = "<bold>420</bold>"; 
    }
  };

  // J'appelle les functions que j'ai crée au dessus
  displayTotalQuantity();
  displayTotalPrice();
  
  
  // Function qui récupère la valeur de l'email qui apparaît en page cart.html
  const getEmailValue = function() {
    
    console.log(email.value);
  };
  // J'appelle la function getEmailValue
  getEmailValue();
  
  // Ecouter soumission du formulaire
  // Appeler la function qui récupère la valeur de l'email


  form.addEventListener ('submit', function(event) {
     // Stoppe le comportement par défaut qui , ici, rafraichit la page
    event.preventDefault(); 
    console.log('click');
})


// RegEx qui vérifie que l' email  et le prenom sont valide

const RegExpEmail =  (/^[a-z0-9\-_\.]+@[a-z0-9]+\.[a-z]{2,5}$/); 
let testEmail = RegExpEmail.test(inputEmail.value);

// Test pour appliquer la RegExEmail à la valeur de l'email, (true ou false)
console.log(testEmail);  


const RegExpFirstName = (/^[a-z ,.'-]+$/i);
let testFirstName = RegExpFirstName.test(inputFirstName.value);
//  Regex qui valide la verification

//Console log de la verification du 2e champs
console.log(testFirstName);  

//Function qui affiche un message dans cart.html qui indique que le panier est vide
const emptyBasket = () => {
  if (itemsTarget){ 
   itemsTarget.innerHTML = "<p>Votre panier actuel est vide.</p>";
   
    }
 };
 emptyBasket();
 
 
 // Produits stockés dans le LocalStorage 
 let totalCommande = [];
 
 let productInLocalStorage =  JSON.parse(localStorage.getItem('product'));
 //JSON.parse c'est pour convertir les données au format JSON qui sont dans le local storage en objet JavaScript
 console.log("les éléments qu'il y a dans le localStorage", productInLocalStorage);
 // le console.log affiche les éléments qu'il y dans le localstorage
};


// Affichage des produits du panier
const positionElement = document.getElementById("cart__items");

console.log(positionElement);

