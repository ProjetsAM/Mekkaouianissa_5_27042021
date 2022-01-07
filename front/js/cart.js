onload = function() {
    console.log("je suis sur la page cart");
    // Le panier récupère la commande passée dans le localstorage
    // On déclare une variable et on lui affecte ce qu'il y a ds le localstorage de (clé "commande")  
    let commande = JSON.parse(localStorage.getItem('commande'));
    const elementPanier = document.getElementById("cart__items");
    const totalPanier = document.getElementById('totalPrice');
    const totalQuantite = document.getElementById('totalQuantity');
    let totalPrice = 0;
    let totalQuantity = 0;
    let formValid = false;
    const RegExpNameFirstName = (/^[a-z ,.'-]+$/i);
    const RegExpAddressCity = (/^[A-Za-z0-9,.'-\s]{3,20}$/);

    // Affichage des produits qu'il y a dans le panier
    if (commande) {
        for (i = 0; i < commande.length; i++) {
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
            totalPrice += commande[i]._price * commande[i]._quantity;
            totalQuantity += commande[i]._quantity;
        }
        totalQuantite.textContent = totalQuantity;
        totalPanier.textContent = totalPrice;
    } else {
        document.getElementById("cart__items").innerHTML = `<p>Votre panier est vide</p>`
    };
    //Fonction pour modifier les quantités dans le panier
    function modifQuantity() {
        // Sélection de tous les boutons deleteItem
        let itemQuantity = document.querySelectorAll(".itemQuantity");
        // Mise en place de l'écoute du clic sur les boutons
        for (let l = 0; l < itemQuantity.length; l++) {
            itemQuantity[l].addEventListener("change", (event) => {
                event.preventDefault();
                // Envoyer les nouvelles données dans le localStorage
                commande[l]._quantity = parseInt(event.target.value);
                localStorage.setItem('commande', JSON.stringify(commande));
                //  Avertir de la modification et recharger la page
                alert('La quantité a été modifiée.');
                window.location.href = "cart.html";
            });
        }
    };
    modifQuantity();
    // Fonction pour supprimer un article dans le panier
    function deleteProduct() {
        // Sélection de tous les boutons deleteItem
        let deleteItems = document.querySelectorAll(".deleteItem");

        // Mise en place de l'écoute du clic sur les boutons
        for (let l = 0; l < deleteItems.length; l++) {
            deleteItems[l].addEventListener("click", (event) => {
                event.preventDefault();
                // Sélectionner l'id du produit qui va être supprimé en cliquant sur le bouton
                let supprId = commande[l]._id;
                let supprColor = commande[l]._color;
                console.log('supprId', supprId);
                console.log('supprColor', supprColor);
                // Filtrer l'élément cliqué par le btn supprimer pour  garder tout sauf le produit sélectionné
                commande = commande.filter(element => !(element._id == supprId && element._color == supprColor));

                // Envoyer les nouvelles données dans le localStorage
                localStorage.setItem('commande', JSON.stringify(commande));

                //  Avertir de la suppression et recharger la page
                alert('Votre article a bien été supprimé.');
                window.location.href = "cart.html";
            });
        }
    };
    deleteProduct();

    //****************************Vérification du formulaire de contact*****************************************
    // Récupérer l'element dans le HTML (DOM)
    const form = document.querySelector(".cart__order__form");
    let inputFirstName = document.getElementById("firstName");
    let inputLastName = document.getElementById("lastName");
    let inputAddress = document.getElementById("address");
    let inputCity = document.getElementById("city");
    let inputEmail = document.getElementById("email");


    // Ecouter soumission du formulaire
    // Appeler la function qui récupère la valeur de l'email
    form.addEventListener('submit', function(event) {
        // Stoppe le comportement par défaut qui , ici, rafraichit la page
        event.preventDefault();
        console.log('click');
        // si le panier est vide : afficher 'le panier est vide'
        console.log("commande", commande)
        if (commande === null || commande.length == 0) {
            document.querySelector("#cart__items").innerHTML = `
            <div class="cart__empty">
            <p>Votre panier est vide ! <br> Merci de sélectionner des produits depuis la page d'accueil</p>
            </div>`;
        }
        
        // Fonction qui vérifie que le prenom est valide
        function controlFirstName() {
            RegExpNameFirstName;
            let testFirstName = RegExpNameFirstName.test(inputFirstName.value);
            if (testFirstName) {
                firstNameErrorMsg.innerText = '';
                formValid;    
            } else {
                let firstNameErrorMsg = document.getElementById('firstNameErrorMsg');
                firstNameErrorMsg.innerText = "Prénom invalide";
            }
        }
        //Fonction qui vérifie que le nom est valide
        function controlLastName() {
            RegExpNameFirstName;
            let testLastName = RegExpNameFirstName.test(inputLastName.value);
            if (testLastName) {
                lastNameErrorMsg.innerText = '';
        
            } else {
                let lastNameErrorMsg = document.getElementById('lastNameErrorMsg');
                lastNameErrorMsg.innerText = "Nom invalide";
            }
        }
        //Fonction qui vérifie que l'adresse est valide
        function controlAddress() {
            RegExpAddressCity;
            let testAddress = RegExpAddressCity.test(inputAddress.value);
            if (testAddress) {
                addressErrorMsg.innerText = '';
                
            } else {
                let addressErrorMsg = document.getElementById('addressErrorMsg');
                addressErrorMsg.innerText = "Adresse invalide";
            }
        }
        //Fonction qui vérifie que la ville est valide
        function controlCity() {
            RegExpAddressCity;
            let testCity = RegExpAddressCity.test(inputCity.value);
            if (testCity) {
                cityErrorMsg.innerText = '';  
            } else {
                let cityErrorMsg = document.getElementById('cityErrorMsg');
                cityErrorMsg.innerText = "Ville invalide";
            }
        }
        // Fonction qui vérifie que l' email est valide
        function controlAnEmail() {
            const RegExpEmail = (/^[a-z0-9\-_\.]+@[a-z0-9]+\.[a-z]{2,5}$/);
            let testEmail = RegExpEmail.test(inputEmail.value)
            if (testEmail) {  
                emailErrorMsg.innerText = '';
            } else {
                let emailErrorMsg = document.getElementById('emailErrorMsg');
                emailErrorMsg.innerText = "Adresse email invalide";
            }
        }
        controlFirstName();
        controlLastName();
        controlAnEmail();
        controlAddress(); 
        controlCity();
        // Récupérer les données du formulaire dans un objet
        let contact = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            email: document.getElementById('email').value
        };

        //******************Fin de la vérification de la validation du formulaire ************************//

        // Après vérification des entrées, j'envoie l'objet contact dans le localStorage
        function controlForm() {
            if (controlFirstName() &&  controlLastName() && controlAddress() && controlCity() && controlAnEmail()) {
                localStorage.setItem('contact', JSON.stringify(contact));
                formValid = true;
                return true;
            } else {
                alert('Merci de revérifier les données du formulaire')
            }
        }
        controlForm();


        //Construction d'un array depuis le local storage
        let commandeIds = [];
        for (let i = 0; i < commande.length; i++) {
            commandeIds.push(commande[i]._id);
        }

        // Les valeurs du formulaire et les produits sélectionnés sont mises dans un objet
        const sendData = {
            contact,
            products: commandeIds,
        }
        //Envoi du formulaire + localStorage (sendData) envoyé au serveur
        const options = {
            method: 'POST',
            body: JSON.stringify(sendData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        };

        fetch("http://localhost:3000/api/products/order", options)
            .then(response => response.json())
            .then(data => {
                console.log(data); 
                if (formValid == true) {
                    document.location.href = 'confirmation.html?id=' + data.orderId;
                }

            });

    })
}; //Fin