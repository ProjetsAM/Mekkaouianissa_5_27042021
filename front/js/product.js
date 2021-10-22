onload = function() {
    console.log("je suis sur la page product");
};
// Récupérer l'url de la page courante et l'afficher dans un console.log
//Est-ce que cette url a un paramètre qui indique quel identifiant a le produit? si oui: quelle est la valeur de cet identifiant ?
//Essayer de récupérer en JS cet identifiant en se documentant sur URLSearchParams

 const str = document.location.href;
 const url = new URL (str);
 const id = url.searchParams.get("id");
 console.log(window.location.href);
 console.log(id);



