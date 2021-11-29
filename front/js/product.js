onload = function () {
    console.log("je suis sur la page product");
    let id;
    let kanapName = document.getElementById("title");
    let kanapDescription = document.getElementById("description");
    let kanapPrice = document.getElementById("price");
    let kanapImageUrl = document.querySelector(".item__img");

    const inputColor = document.getElementById("colors");
    const quantity = document.getElementById("quantity");

    /* Fonction qui récupère les paramètres de l'url, avec l'identifiant qui indique le produit
    concerné par la page*/

    function getIdFromUrl() {
        const str = document.location.href;
        const url = new URL(str);
        id = url.searchParams.get("id");
        console.log('id vaut:', id);
    };
    getIdFromUrl();
    // On veut vérifier si l'id n'est pas dans l'url
    if (id == null) {
        alert("Vous devez sélectionner un canapé auparavant");
    }
    

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
                console.log("quantity vaut  " , quantity.value);
                console.log("color vaut " , inputColor.value);

                if (inputColor.value === "") {
                    alert("Veuillez saisir la couleur.");
                
                }
                //vérifier si la quantité est supérieure à 0 et inférieure ou égale à 100
                else if (quantity.value < 1 || quantity.value > 100) {
                    alert("Veuillez saisir une quantité entre 1 et 100");

                }
                else {
                 //Récupération des options de l'article à ajouter au panier
                const selectedProduct = {
                    _id: id,
                    _image: imageUrl,
                    _name: name,
                    _price: price,
                    _color: inputColor.value,
                    _quantity: quantity.value,
                };
                console.log('vous avez cliqué');
                console.log('selectedProduct vaut', selectedProduct);


                // Vérifier s'il existe une commande

                let commandeExistante = JSON.parse(localStorage.getItem('commande'));


                if (commandeExistante) {
                    commandeExistante.push(selectedProduct);
                    localStorage.setItem("commande", JSON.stringify(commandeExistante));
                    console.log(commandeExistante); 
                    console.log(quantity.value);
                    console.log(commandeExistante[0]._id)

                    
                }
                else {
                    commandeExistante = [];
                    commandeExistante.push(selectedProduct);
                    localStorage.setItem("commande", JSON.stringify(commandeExistante));
                    console.log(commandeExistante);

                };


                }

                


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

            kanapName.innerHTML = "Non communiqué";
            kanapDescription.innerHTML = "Non communiqué";
            kanapPrice.innerHTML = "Non communiqué";
            kanapImageUrl.innerHTML = `<p>Non communiqué</p>`;


        });

};