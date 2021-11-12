
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
        let kanapImageUrl = document.querySelector(".item__img");

        kanapName.innerHTML = name;
        kanapDescription.innerHTML = description;
        kanapPrice.innerHTML = price;
        kanapImageUrl.innerHTML = `<img src=${imageUrl} alt=${altTxt}>`;

        // Boucle sur les couleurs des  canapés

        for (let i = 0; i < colors.length; i++) {
            console.log(colors[i]);
            input.innerHTML += `<option value> ${colors[i]}</option>`;
           

        }; 
        
        // Ecouter le clic sur le bouton ajouter au panier (eventListener)

        const btn = document.getElementById("addToCart");

        btn.addEventListener('click', () => {

            console.log('vous avez cliqué');
        });

        const choiceProduct = {
            id: id,
            image: imageUrl,
            alt: altTxt,
            name: name,
            price: price,
            color: colors,
            quantity: 1,
        };
        console.log(choiceProduct);        

       
        //------------------------------------------Stocker la récupération des valeurs du formulaire dans le local storage-----
        
   
        //Déclaration de la variable "produitInLocalStorage" dans laquelle on met les keys et les values qui sont dans le local storage
        let productInLocalStorage = JSON.parse(localStorage.getItem('product'));
        //--JSON.parse c'est pour convertir les données au format JSON qui sont dans le local storage en objet JavaScript        
        console.log(productInLocalStorage);  // Retourne la valeur null

        // s'il y a déjà des produits d'enregistré dans le local storage
        if(productInLocalStorage){
            productInLocalStorage.push(choiceProduct);


        }
        // s'il n'y a pas de produits d'enregistré dans le local storage
        else{
            productInLocalStorage = [];
            productInLocalStorage.push(choiceProduct);
            localStorage.setItem("product", JSON.stringify(productInLocalStorage));

            console.log(productInLocalStorage);

        }       

        




    }
    );
};




  // Commande qui ajoute au localstorage une combinaison de clé/valeur 

  localStorage.setItem('totalCommande', '1849');
    