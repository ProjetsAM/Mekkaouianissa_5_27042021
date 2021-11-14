
onload = function () {
  const API = "http://localhost:3000/api/products";
  const itemsTarget = document.getElementById("items");
  const container = document.getElementById("items");
  
  // Fetch récupère les données depuis l'url de l'API
  
  fetch(API)
    .then((res) => res.json()) 
    .then((data) => {
      console.log(data);
    //Boucle qui affiche les canapés qu'il y a dans l'API jusqu'à épuisement
        for (let i = 0; i < data.length; i++) {
        console.log(i);
        console.log(data[i].name); 
        console.log(data[i].description);
        console.log(data[i].altTxt);
        console.log(data[i]._id);
        console.log(data[i].imageUrl);
        // addOneKanap(); 
      container.innerHTML += `<a href="./product.html?id=${data[i]._id}">
        <article>
        <img src="${data[i].imageUrl}" alt="${data[i].altTxt}">
        <h3 class="productName">${data[i].name}</h3>
        <p class="productDescription">${data[i].description}</p>
        </article>
        </a>`;
      }
    })
    // Message au cas où le serveur ne répond pas
    .catch((error) => {
        console.log("Api non connectée");
        WarnApiNotConnected();
    }); 
    
    const addOneKanap = function (infos) {
        container.innerHTML = `<a href="./product.html?id=${infos._id}">
        <article>
        <img src="${infos.imageUrl}" alt="${infos.altTxt}">
        <h3 class="productName">${infos.name}</h3>
        <p class="productDescription">${infos.description}</p>
        </article>
        </a>`;
    };

    const WarnApiNotConnected = function() {
        if(itemsTarget) {
            itemsTarget.innerHTML = `<p>Une erreur s'est produite, veuillez nous excuser.</p>`;
        }
    }
    


    

  
  

}