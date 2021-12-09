onload = function () {
  console.log("je suis sur la page cart");
  // Le panier récupère la commande passée dans le localstorage 
  // On déclare une variable et on lui affecte par le = ce qu'il y a ds le localstorage de (clé "commande")  
  let commande = JSON.parse(localStorage.getItem('commande'));
  const elementPanier = document.getElementById("cart__items");

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
   }
  }
  else {

    document.getElementById("cart__items").innerHTML = `<p>Votre panier est vide</p>`;
    deleteItems.addEventListener("click", (event)=>{
      event.preventDefault();
    });
  };
} 

// Fonction pour supprimer un article dans le panier
function deleteBasket() { 
// 1 Sélection de tous les boutons deleteItem
let deleteItems = document.querySelectorAll(".deleteItem");
console.log(deleteItems);

// 2 Mise en place de l'écoute clic sur les boutons
for(let l = 0; l < deleteItems.length; l++){
  deleteItems[l].addEventListener("click", (event) =>{
    event.preventDefault();
  

// 3 Sélectionner l'id du produit qui va être supprimé en cliquant sur le bouton
let supprId = commande[l]._id;

//4 Filtrer l'élément cliqué par le btn supprimer
commande = commande.filter(element => element._id !== supprId);


//5 Envoyer les nouvelles données dans le localStorage
localStorage.setItem('commande', JSON.stringify(commande));

//6 Avertir de la suppression et recharger la page 
alert('Votre article a bien été supprimé.');
window.location.href = "cart.html";
  });
}
};
deleteBasket()

// Récupération du total des articles








//Récupération du montant total de la commande dans le panier

// Déclarer la variable pour pouvoir y mettre les prix qui sont dans le panier
let totalPrice = [];
// Récupérer les prix qui sont dans le panier
for (let m = 0; m < commande.length; m++) {
  const totalAmount = commande[m]._price ;

// Mettre les prix du panier dans la variable totalPrice
  totalPrice.push(totalAmount);
}
// Additionner les prix qu'il y a dans le tableau de la variable totalPrice avec "reduce"
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const price = totalPrice.reduce(reducer);

const totalPanier = document.getElementById('totalPrice');

