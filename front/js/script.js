onload = function() {
    console.log("je suis sur la page index");
};

const img = document.getElementById('img');

fetch('http://localhost:3000/api/products')
.then(res => {
  console.log(res);

  if(res.ok){
    res.json().then(data => 
        console.log(data[0].name));
    }
  } else {
      console.log("ERREUR"),
      document.getElementById('items').innerHTML = "Une erreur s'est produite, veuillez nous excuser"
      
  }
}) 
      