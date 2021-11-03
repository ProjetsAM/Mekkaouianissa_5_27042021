onload = function () {
  console.log("je suis sur la page cart");

  // on utilise getElementById pour cibler un id, (#email)
  // on utilise querySelector pour cibler 1 element qui a une class (.cart__order__form)
  // on utilise querySelectorAll pour cibler tous les elements qui ont la meme class  (on verra + tard)
  // let  email = document.getElementById("email");  // car le HTML  montre un #email
  
  const form = document.querySelector(".cart__order__form");  // car le HTML ne montre pas d 'id, mais une class .cart__order__form
  // exercice : récupérer l'element sans la value, on veut la balise , pour les champs suivants (indice : ligne 7)
  let inputFirstName = document.getElementById("firstName");
  let inputLastName = document.getElementById("lastName");
  let inputAdress = document.getElementById("adress");
  let inputCity = document.getElementById("city");
  let inputEmail = document.getElementById("email");  // pas besoin de la value

  // etape 1 on crée les variables let et les variables const dont on a besoin pour le fichier
  let totalItems = document.getElementById("totalQuantity");
  let totalPrice = document.getElementById("totalPrice");

  // étape 2 : on crée des functions avec un nom clair (en anglais) pour savoir, en relisant le code, ce qui est fait ici en JS
  const displayTotalQuantity = () => {
    // il s agit ici d une fonction flechee , j aurais pu ecrire : const displayTotalQuantity = function() {...}
    if (totalItems) {
      // le if sert à verifier que le #totalQuantity exsitera bien dans la page concernée et éviter, si ce n est plus le cas dans le futur, de péter toute la page en indiquant une erreur
      totalItems.innerText = "5"; // histoire de faire une variante, si tu n'as que du texte à insérer (sans balises) alors innerText suffira
    }
  };

  const displayTotalPrice = () => {
    if (totalPrice) {
      // on a un if pour etre sûr que le #totalPrice existera bien dans le DOM avant d'aller + loin en JS
      totalPrice.innerHTML = "<bold>420</bold>"; // ajouter le <span> apportait pas grand chose, j ai pimenté le innerHTML avec <bold>
    }
  };

  // exercice:
  // créer une function getEmailValue qui récupère la valeur (value) de l email qui apparait en page cart.html et qui l affiche dans un console.log
  // astuce google mettre : js ou plain js ou vanilla JS : puis ta recherche google

  // étape 3 : on appelle/utilise les fonctions pour qu'elles soient executées (au dessus, on les a juste définies pour leur dire quoi faire au moment où on les appellera)
  displayTotalQuantity();
  displayTotalPrice();
  // appeler la function getEmailValue ici
  
  const getEmailValue = function() {
    
    console.log(email.value);
  };
  getEmailValue();
  
  // Ecouter soumission du formulaire
  // Appeler la function qui récupère la valeur de l'email


  form.addEventListener ('submit', function(event) {
    event.preventDefault();  // pour stopper le comportement par défaut qui , ici, rafraichit la page
    console.log('click');
})


// exercice : trouver une RegEx qui vérifie qu un email est valide (grâce à Google, en JS)
const RegExpEmail =  (/^[a-z0-9\-_\.]+@[a-z0-9]+\.[a-z]{2,5}$/); 

let testEmail = RegExpEmail.test(inputEmail.value);// en remplaçant null

// exercice = appliquer dans le console.log le test d'appliquer la RegExEmail à la valeur de l'email, ça retournera true ou false
console.log(testEmail);   // en remplaçant undefined




// Seulement ensuite :
// exercice : quel autre champs doit etre validé ?
const RegExpFirstName = (/^[a-z ,.'-]+$/i);
// quelle validation veut on sur ce 2e champs ?
let testFirstName = RegExpFirstName.test(inputFirstName.value);
// quelle regex valide cette verification du 2e champs ?

// faire un console log de la verification du 2e champs
console.log(testFirstName);  // en remplaçant undefined

const emptyBasket = () => {
  if (itemsTarget){ 
   itemsTarget.innerHTML = "<p>Votre panier actuel est vide.</p>";
   
    }
 };
};

/*créer une fonction qui affiche dans la page cart.html un message indiquant que le panier est vide.
Je te laisse choisir le nom (en anglais) de la fonction.
La fonction, en gros, va faire va faire un innerHTML dans la page cart pour afficher un truc du genre <p>Votre panier actuel est vide.</p>
Une fois cette fonction créée, il faut l appeler pour qu elle s execute (comme tu l avais fait pour getEmailValue)*/




