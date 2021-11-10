  onload = function() {
    console.log("je suis sur la page product");
    let id;
    const input = document.getElementById("colors");

    /* Fonction qui récupère les paramètres de l'url, avec l'identifiant qui indique le produit
    concerné par la page*/

    function getIdFromUrl() {
        const str = document.location.href;
        const url = new URL(str);
        id = url.searchParams.get("id");
        console.log('id vaut:',id);
    };
    getIdFromUrl();
   
    // Affiche le produit sur la page

    const urlProduct = `http://localhost:3000/api/products/${id}`;
   
    fetch(urlProduct)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        console.log(data.price);
        console.log(data.description);
        console.log(data.name);


        let name = data.name;
        let description = data.description;
        let imageUrl = data.imageUrl;
        let altTxt = data.altTxt;
        let colors = data.colors;
        let price = data.price;
        let id = data._id;
 
       
        let kanapName = document.getElementById("title");
        let kanapDescription = document.getElementById("description");
        let kanapPrice = document.getElementById("price");
        let kanapImageUrl = document.querySelector(".item__img")

        kanapName.innerHTML = name;
        kanapDescription.innerHTML = description;
        kanapPrice.innerHTML = price;
        kanapImageUrl.innerHTML = `<img src=${imageUrl} alt=${altTxt}>`;

        // Boucle sur les couleurs des  canapés

        for (let i = 0; i < colors.length; i++) {
            console.log(colors[i]);
            input.innerHTML += `<option value=${colors}>`;
           

        }; 
        
        // Ecouter le clic sur le bouton ajouter au panier

        const btn = document.getElementById("addToCart");

        btn.addEventListener('click', () => {

            console.log('vous avez cliqué');
        });

        // Commande qui ajoute au localstorage une combinaison de clé/valeur 

        localStorage.setItem('totalCommande', '1849');
        
        

       

        




    }
    );
};
 