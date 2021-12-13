onload = function () {
  console.log("je suis sur la page cart");
  // Le panier récupère la commande passée dans le localstorage
  // On déclare une variable et on lui affecte par le = ce qu'il y a ds le localstorage de (clé "commande")  
  let commande = JSON.parse(localStorage.getItem('commande'));
  const elementPanier = document.getElementById("cart__items");
  // const totalPanier = document.getElementById('totalPrice');  // abandonnons cette piste
  // const totalQuantite = document.getElementById('totalQuantity');  // abandonnons cette piste
  // let totalPrice = commande[i]._price * commande[i]._quantity;  // [i] n'est pas connu à ce stade
  // let totalQuantity = commande[i]._quantity; // [i] n'est pas connu à ce stade
  // let totalPrice = 0; // si on veut garder 1 seule boucle, mais abandonnons cette piste
  // let totalQuantity = 0; //  si on veut garder 1 seule boucle, mais abandonnons cette piste

  const itemsTarget = document.getElementById('order');
  const form = document.querySelector(".cart__order__form");
 // Récupérer l'element dans le HTML
  let inputFirstName = document.getElementById("firstName");
  let inputLastName = document.getElementById("lastName");
  let inputAdress = document.getElementById("adress");
  let inputCity = document.getElementById("city");
  let inputEmail = document.getElementById("email");

  // Affichage des produits qu'il y a dans le panier
    if (commande) {
    for (i = 0; i < commande.length; i++){
      elementPanier.innerHTML +=
       `<article class="cart__item" "data-id="${commande[i]._id}" data-color="${commande[i]._color}" >
       <div class="cart__item__img">
         <img src=${commande[i]._image} alt="Photographie d'un canapé">
       </div>
       <div class="cart__item__content">
         <div class="cart__item__content__titlePrice">
           <h2>${commande[i]._name}</h2>
           <p>color : ${commande[i]._color}</p>
           <p> ${commande[i]._price} €</p>
         </div>
         <div class="cart__item__content__settings">
           <div class="cart__item__content__settings__quantity">
             <p>Qté :</p>
             <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${commande[i]._quantity}">
           </div>
           <div class="cart__item__content__settings__delete">
             <button class="deleteItem">Supprimer</button>
           </div>
         </div>
       </div>
     </article> `;
    totalQuantity.innerText = "2";  // innerText cest sans html , confusion avec totalQuantite.innerText = ; pas besoin de +=
    totalPrice.innerText = "84"; // innerText cest sans html , confusion avec totalPanier.innerText = ; pas besoin de +=
    
   }
  }
  else {
    document.getElementById("cart__items").innerHTML = `<p>Votre panier est vide</p>`
  };

  // Fonction pour supprimer un article dans le panier
  function deleteProduct() {
    // Sélection de tous les boutons deleteItem
    let deleteItems = document.querySelectorAll(".deleteItem");
   
    // Mise en place de l'écoute clic sur les boutons
    for(let l = 0; l < deleteItems.length; l++){
      deleteItems[l].addEventListener("click", (event) =>{
        event.preventDefault();
     
        // Sélectionner l'id du produit qui va être supprimé en cliquant sur le bouton
        let supprId = commande[l]._id;
        let supprColor = commande[l]._color;
        console.log('supprId', supprId);
        console.log('supprColor', supprColor);
        // Filtrer l'élément cliqué par le btn supprimer
        commande = commande.filter(element => !(element._id == supprId && element._color == supprColor));
       
        // Envoyer les nouvelles données dans le localStorage
        localStorage.setItem('commande', JSON.stringify(commande));

        //  Avertir de la suppression et recharger la page
        alert('Votre article a bien été supprimé.');
        window.location.href = "cart.html";
      });
    }
  };
  deleteProduct();
 
 
//************************Récupération du total des articles***********************************************
 
  // Afficher le total des articles dans le panier
function totalArticles() {
  let totalItems = 0;
  for (l in commande) {
    // Convertir la valeur 'quantité' dans le localstorage en une chaîne
    // et renvoie un entier (parseInteger)
    const newQuantity = parseInt(commande[l]._quantity);
    console.log(newQuantity);
    // attribuer la valeur retournée par parseInt à la variable totalItems
    totalItems += newQuantity;
  }
    // attribuer à #totalQuantité la valeur de totalItems et l'afficher dans le DOM
    const totalQuantity = document.getElementById('totalQuantity');
    totalQuantity.textContent = totalItems;
}
totalArticles();
 
 
//************************Récupération du montant total de la commande dans le panier***********************
 
function priceBasket() {
  let totalCart = 0;
  for (m in commande) {
    const newTotal = parseInt(commande[m]._quantity) *  parseInt(commande[m]._price);
    totalCart += newTotal;
  }
    const totalPanier = document.getElementById('totalPrice');
    totalPanier.textContent = totalCart;  
}
priceBasket();


//****************************Vérification du formulaire de contact*****************************************

// Function qui récupère la valeur de l'email qui apparaît en page cart.html
const getEmailValue = function() {
  
  console.log(email.value);
};
// J'appelle la function getEmailValue
getEmailValue();

// Ecouter soumission du formulaire
// Appeler la function qui récupère la valeur de l'email

form.addEventListener('submit', function(event) {
  // Stoppe le comportement par défaut qui , ici, rafraichit la page
  event.preventDefault();
  console.log('click');
})


// RegEx qui vérifie que l' email  et le prenom sont valide

const RegExpEmail = (/^[a-z0-9\-_\.]+@[a-z0-9]+\.[a-z]{2,5}$/);
let testEmail = RegExpEmail.test(inputEmail.value);

// Test pour appliquer la RegExEmail à la valeur de l'email, (true ou false)
console.log(testEmail);


const RegExpFirstName = (/^[a-z ,.'-]+$/i);
let testFirstName = RegExpFirstName.test(inputFirstName.value);
//  Regex qui valide la verification

//Console log de la verification du 2e champs
console.log(testFirstName);

};