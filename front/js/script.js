onload = function() {
    console.log("je suis sur la page index");
};

const img = document.getElementById('img');

fetch('http://localhost:3000/api/products')
.then(res => {
  console.log(res);

  if(res.ok){
    res.json().then(data => 
        let canape = [data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7]];
        for(let ligne = 0; ligne < canape.length; ligne++){
          console.log(canape[ligne]);
        }
    }
   else {
      console.log("ERREUR"),
      document.getElementById('items').innerHTML = "Une erreur s'est produite, veuillez nous excuser"
      
  }
}) 
      