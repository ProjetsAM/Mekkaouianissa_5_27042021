onload = function () {
  const API = "http://localhost:3000/api/products";
  const itemsTarget = document.getElementById("items");
  const container = document.getElementById("items");


  fetch(API)
    .then((res) => res.json()) 
    .then((data) => {
      console.log(data);
    
        for (let i = 0; i < data.length; i++) {
        console.log(i);
        console.log(data[i].name); 
        console.log(data[i].description);
        console.log(data[i].altTxt);
        console.log(data[i]._id);
        console.log(data[i].imageUrl);
        // addOneKanap(); 
        container.innerHTML = `<a href="./product.html?id=42">
        <article>
        <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
        <h3 class="productName">Kanap Blabla name1</h3>
        <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
        </article>
        </a>`;
      }
    })
    .catch((error) => {
        console.log("Api non connectée");
        WarnApiNotConnected();
    }); 
    
    const addOneKanap = function () {
        container.innerHTML = `<a href="./product.html?id=42">
        <article>
        <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
        <h3 class="productName">Kanap Blabla name1</h3>
        <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
        </article>
        </a>`;
    };

    const WarnApiNotConnected = function() {
        if(itemsTarget) {
            itemsTarget.innerHTML = `<p>Une erreur s'est produite, veuillez nous excuser.</p>`;
        }
    }
    

  
  

}