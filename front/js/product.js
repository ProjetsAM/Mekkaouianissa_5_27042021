onload = function() {
    console.log("je suis sur la page product");
    //const id;

    function getIdFromUrl() {
        const str = document.location.href;
        const url = new URL(str);
        id = url.searchParams.get("id");
    };
    getIdFromUrl();
};

const urlProduct = 'http://localhost:3000/api/products/107fb5b75607497b96722bda5b504926';

fetch(urlProduct)
  .then((res) => res.json()) 
  .then((data) => {
      console.log(data);
  
    }
  )
 