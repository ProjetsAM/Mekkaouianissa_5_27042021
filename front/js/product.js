  onload = function() {
    console.log("je suis sur la page product");
    let id;

    function getIdFromUrl() {
        const str = document.location.href;
        const url = new URL(str);
        id = url.searchParams.get("id");
        console.log('id vaut:',id);
    };
    getIdFromUrl();
   
    // Affiche le produit sur la page

    const urlProduct = 'http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926';
   
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
        let kanapImageUrl = document.querySelector(".item__img").innerHTML = `<img src=${imageUrl} alt="photo du canape">`;

        kanapName.innerHTML = name;
        kanapDescription.innerHTML = description;
        kanapPrice.innerHTML = price;
        
        

       
        


    }
    );
};
 