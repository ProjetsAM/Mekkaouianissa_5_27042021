onload = function () {
  console.log("je suis sur la page cart");
  // Le panier(cart.js) récupère la commande (sa sélection)passée dans le localstorage 
  // On déclare une variable et on lui affecte par le = ce qu'il y a ds le localstorage de (clé "commande") 
  // Deux cas de figure : 
  // Soit il y a bien une commande à afficher : à ce stade on fait un console.log de la commande passée : if (getItem)
  // Soit le panier est vide : on affiche un message "votre panier est vide" (innerHTML) : else

  let commande = JSON.parse(localStorage.getItem('commande'));
  const elementPanier = document.getElementById("cart__items");
  let structureProduitPanier = [];
  // Boucle sur chaque élément du tableau commande, pour faire un console.log de chaque élément (chaque selectedPro)
  // Si le panier n'est pas vide : afficher les produits dans le localStorage
    if (commande) {
    for (i = 0; i < commande.length; i++){ 

      elementPanier.innerHTML += 
       `<article class="cart__item" "data-id="${commande[i]._id}" data-color="${commande[i]._color}" >
       <div class="cart__item__img">
         <img src=${commande[i]._image} alt="${commande[i].altTxt}">
       </div>
       <div class="cart__item__content">
         <div class="cart__item__content__titlePrice">
           <h2>${commande[i]._name}</h2>
           <p> ${commande[i]._price}</p>
         </div>
         <div class="cart__item__content__settings">
           <div class="cart__item__content__settings__quantity">
             <p>Qté :</p>
             <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${commande[i]._quantity}">
           </div>
           <div class="cart__item__content__settings__delete">
             <p class="deleteItem">Supprimer</p>
           </div>
         </div>
       </div>
     </article> `;

    console.log(commande[i]);
    console.log(commande[i]._quantity)
  
   }
  }
  else {

    document.getElementById("cart__items").innerHTML = `<p>Votre panier est vide</p>`;
  };
} // Si le panier est vide : afficher le panier est vide
