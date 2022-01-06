onload = function() {
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
            addCart();

            // Ecouter le clic sur le bouton ajouter au panier (eventListener)
            function addCart(article) {
                const btn = document.getElementById("addToCart");

                btn.addEventListener('click', () => {
                    if (inputColor.value === "") {
                        alert("Veuillez saisir la couleur.");

                    }
                    //vérifier si la quantité est supérieure à 0 et inférieure ou égale à 100
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

                        // Vérifier s'il existe une commande dans le Local Storage

                        let commandeExistante = JSON.parse(localStorage.getItem('commande'));

                        if (!commandeExistante) {
                            commandeExistante = [];
                            commandeExistante.push(selectedProduct);
                        } else {
                            let productExistantDansCommande = false;

                            for (let j = 0; j < commandeExistante.length; j++) {

                                // Comparer l'id et la couleur du selectedProduct avec l'id et la couleur de la ligne de la commandeExistante
                                if (selectedProduct._id == commandeExistante[j]._id && selectedProduct._color == commandeExistante[j]._color) {
                                    // Mise à jour d'un selectedProduct existant
                                    commandeExistante[j]._quantity = parseInt(commandeExistante[j]._quantity) + parseInt(selectedProduct._quantity);
                                    productExistantDansCommande = true;
                                }
                            }
                            if (!productExistantDansCommande) {
                                //On ajoute un selectedProduct nouveau à la commande
                                commandeExistante.push(selectedProduct);
                            }
                        }

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