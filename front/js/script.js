onload = function() {
    // On déclare les variables exploitable dans le fichier
    const API = "http://localhost:3000/api/products";
    const container = document.getElementById("items");

    // Fetch récupère les données depuis l'url de l'API
    fetch(API)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            //Boucle qui affiche les canapés qu'il y a dans l'API jusqu'à épuisement
            const addKanaps = () => {  
                for (let i = 0; i < data.length; i++) {
                    //Insère les canapés dans index html avec les données de l api 
                    container.innerHTML += `<a href="./product.html?id=${data[i]._id}">
                    <article>
                    <img src="${data[i].imageUrl}" alt="${data[i].altTxt}">
                    <h3 class="productName">${data[i].name}</h3>
                    <p class="productDescription">${data[i].description}</p>
                    </article>
                    </a>`;
                }
            };
            addKanaps();
        })
        // Message au cas où le serveur ne répond pas, que l'Api n'est pas connectée
        .catch((error) => {
            warnApiNotConnected();
        });


    const warnApiNotConnected = function() {
        if (container) {
            // Pour afficher le message au bon endroit dans le DOM
            container.innerHTML = `<p>Une erreur s'est produite, veuillez nous excuser.</p>`;
        }
    }
};