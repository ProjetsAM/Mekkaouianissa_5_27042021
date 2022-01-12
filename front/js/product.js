onload = function() {
    //On déclare les variables exploitable dans le fichier
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
        //str récupère l'url de la page
        const str = document.location.href;
        // Création d'une nouvelle url à partir de l'url actuelle
        const url = new URL(str);
        //url.searchParams pour manipuler les paramètres de requête de l'url
        id = url.searchParams.get("id");
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
            //On récupère les détails du produit
            let name = data.name;
            let description = data.description;
            let imageUrl = data.imageUrl;
            let altTxt = data.altTxt;
            let colors = data.colors;
            let price = data.price;
            let id = data._id;
            // On insère les détails du produit dans le DOM
            kanapName.innerHTML = name;
            kanapDescription.innerHTML = description;
            kanapPrice.innerHTML = price;
            kanapImageUrl.innerHTML = `<img src=${imageUrl} alt=${altTxt}>`;

            // Boucle sur les couleurs des canapés
            for (let i = 0; i < colors.length; i++) {
                inputColor.innerHTML += `<option value = ${colors[i]}>${colors[i]}</option>`;

            };
            addCart();
            // Ecouter le clic sur le bouton ajouter au panier (eventListener)
            function addCart() {
                const btn = document.getElementById("addToCart");

                btn.addEventListener('click', () => {
                    if (inputColor.value === "") {
                        alert("Veuillez saisir la couleur.");
                    }
                    //Vérifier si la quantité est supérieure à 0 et inférieure ou égale à 100
                    else if (quantity.value < 1 || quantity.value > 100) {
                        alert("Veuillez saisir une quantité entre 1 et 100");
                    } else {
                        //Stockage des informations de l'article à ajouter au panier
                        const selectedProduct = {
                            _id: id,
                            _image: imageUrl,
                            _name: name,
                            _price: price,
                            _color: inputColor.value,
                            _quantity: parseInt(quantity.value),
                        };
                        // Vérifier s'il existe une commande en cours dans le Local Storage
                        // JSON.parse permet de convertir les données au format JSON en objet JavaScript
                        let commandeExistante = JSON.parse(localStorage.getItem('commande'));
                        // Si aucune commande n'existe on en créé une
                        if (!commandeExistante) {
                            // Cas où on crée une nouvelle commande, on crée un nouveau tableau   
                            commandeExistante = [];
                            // Ici on pushe les informations de l'article à ajouter au panier
                            commandeExistante.push(selectedProduct);
                        } else {
                            // Sinon entre dans le else et on poursuit notre commande en cours
                            let productExistantDansCommande = false;
                            // On boucle sur la commande en cours 
                            for (let j = 0; j < commandeExistante.length; j++) {
                                // Comparer l'id et la couleur du selectedProduct avec l'id et la couleur de la ligne de la commandeExistante
                                if (selectedProduct._id == commandeExistante[j]._id && selectedProduct._color == commandeExistante[j]._color) {
                                    // Mise à jour d'un selectedProduct existant
                                    commandeExistante[j]._quantity = parseInt(commandeExistante[j]._quantity) + parseInt(selectedProduct._quantity);
                                    // Pour empêcher le push dans commandeExistante, car la mise à jour  de la quantité suffit
                                    productExistantDansCommande = true;
                                }
                            }
                            if (!productExistantDansCommande) {
                                //On ajoute un selectedProduct nouveau à la commande, donc on pushe une nouvelle ligne
                                commandeExistante.push(selectedProduct);
                            }
                        }
                        // On met à jour le localStorage
                        localStorage.setItem("commande", JSON.stringify(commandeExistante));
                        alert('Votre article a été ajouté au panier');
                    }
                });
            }
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