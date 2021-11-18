onload = function () {
  console.log("je suis sur la page cart");
  // Le panier(cart.js) récupère la commande (sa sélection)passée dans le localstorage 
  // On déclare une variable et on lui affecte par le = ce qu'il y a ds le localstorage de (clé "commande") 
  // Deux cas de figure : 
  // Soit il y a bien une commande à afficher : à ce stade on fait un console.log de la commande passée : if (getItem)
  // Soit le panier est vide : on affiche un message "votre panier est vide" (innerHTML) : else

  let commande = localStorage.getItem("commande");

  if (commande) {
    console.log(commande);
  }
  else {

    document.getElementById("cart__items").innerHTML = `<p>Votre panier est vide</p>`;
  };
}
