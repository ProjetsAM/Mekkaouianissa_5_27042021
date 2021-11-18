
onload = function() {
    console.log("je suis sur la page product");
    let id;
    const inputColor = document.getElementById("colors");
    const quantity = document.getElementById("quantity");
    
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
            inputColor.innerHTML += `<option value = ${colors[i]}>${colors[i]}</option>`;
            
            
        }; 
        
        // Ecouter le clic sur le bouton ajouter au panier (eventListener)
        
        const btn = document.getElementById("addToCart");
        
        btn.addEventListener('click', () => {
            
            //Récupération des options de l'article à ajouter au panier
            const selectedProduct = {
                _id: id,
                image: imageUrl,
                _name: name, 
                _price: price,
                color: inputColor.value,
                quantity: quantity.value,
            };
            console.log('vous avez cliqué');
            console.log(selectedProduct);  
            
            

            /*if (productInLocalStorage) { 
            
            localStorage.setItem("product",JSON.stringify(productInLocalStorage));  
            console.log(productInLocalStorage);

            }

            else  { 
            
            productInLocalStorage.push(product);
            console.log(product);
            } */

            let commandeExistante = localStorage.getItem('commande');

            if (commandeExistante) {
                console.log(commandeExistante);
            }
            else {
                selectedProduct = [];
                localStorage.setItem("commande",JSON.stringify(selectedProduct));
                console.log(selectedProduct);

            };

            //Au clic vérifier s'il existe une commande :
            // On déclare une variable  et le = lui affecte le résultat (getItem)
            // "If" il existe une commande, alors on console.log "la commande"
            /* "Else" alors il n'existe pas de commande on en crée une "commande", 
            on commence par créer une commande en faisant localStorage.setItem de "commande (clé) " + "la valeur" [selectedProduct] ou faire un console.log de "selectedProduct*/
              
        });

        
        
        
       
        /*/------------------------------------------Stocker la récupération des valeurs du formulaire dans le local storage-----
        
        
        //Déclaration de la variable "productInLocalStorage" dans laquelle on met les keys et les values qui sont dans le local storage
        let productInLocalStorage = JSON.parse(localStorage.getItem('product'));
        //--JSON.parse c'est pour convertir les données au format JSON qui sont dans le local storage en objet JavaScript        
         console.log(productInLocalStorage);  // Retourne la valeur null
        
        // s'il y a déjà des produits d'enregistré dans le local storage
        if(productInLocalStorage){
            productInLocalStorage.push(selectedProduct);
            
            
        }
        // s'il n'y a pas de produits d'enregistré dans le local storage
        else{
            productInLocalStorage = [];
            productInLocalStorage.push(selectedProduct);
            localStorage.setItem("product", JSON.stringify(productInLocalStorage));
            
            console.log(productInLocalStorage);
            
        }       
        
        // Endroit où sont stockées les infos pour pouvoir les y retrouver ultérieurement
        
        localStorage.setItem('commande',["canapé1(à faire en JSON) "]);*/
        
            
    })
    .catch((error) => {
        // Message d'erreur quand le serveur ne répond pas
        alert("le serveur ne répond pas");
    }); 
    
};
