onload = function () {
  console.log("je suis sur la page cart");
  // Le panier récupère la commande passée dans le localstorage
  // On déclare une variable et on lui affecte par le = ce qu'il y a ds le localstorage de (clé "commande")  
  let commande = JSON.parse(localStorage.getItem('commande'));
  const elementPanier = document.getElementById("cart__items");
  const totalPanier = document.getElementById('totalPrice');
  const totalQuantite = document.getElementById('totalQuantity');
  let totalPrice = commande[i]._price * commande[i]._quantity;
  let totalQuantity = commande[i]._quantity;
 

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
     totalQuantity.innerText += `<span id="totalQuantity"></span>`; 
     totalPrice.innerText += `<span id="totalPrice"></span>`;

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

    // Filtrer l'élément cliqué par le btn supprimer
    commande = commande.filter(element => element._id !== supprId || element._color !== supprColor);
    
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
  // prix de l'article quantité * prix
   totalPrice  
   
  
  const totalPanier = document.getElementById('totalPrice');
  
}
priceBasket();


}; 