onload = function() {
    const API = "http://localhost:3000/api/products";
    const itemsTarget = document.getElementById("items");
    const container = document.getElementById("items");

    // Fetch récupère les données depuis l'url de l'API
    fetch(API)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            //Boucle qui affiche les canapés qu'il y a dans l'API jusqu'à épuisement
            const addKanaps = () => {  
                for (let i = 0; i < data.length; i++) {
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
        if (itemsTarget) {
            itemsTarget.innerHTML = `<p>Une erreur s'est produite, veuillez nous excuser.</p>`;
        }
    }
};