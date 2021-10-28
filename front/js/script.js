onload = function () {
  const API = "http://localhost:3000/api/products";
  fetch(API)
    .then((res) => res.json()) // là on se dit que tout va bien, l API répond et envoie les données mais il faut les passer au format Json pour pouvoir les lire et les manipuler. Manipuler ça veut dire : sortir que les noms des canapés quand on ne veut que les noms
    .then((data) => {
      //  un 2e then qui ne peut se déclencher que si le then d avant a fonctionné correctement
      // on peut faire un :
      // console.log(data);
      // pour etre sûr que tout va bien

      //  syntaxe :
      // on termine une ligne de code JS par ;
      //dans une ligne de code JS :si tu ouvres avec " , tu fermes avec le meme : "
      // mais tu peux ouvrir avec ' à la place de " si tu fermes bien avec le '
      //astuce : si tu as du texte avec un ' tu mets \' pour ne pas casser le segment ' ' ou alors tu fais un segment " "
      // mais on verra bientôt les template litteral `du texte ici ${maVariable}`
      //
      // la fameuse boucle pour exploiter tout le catalogue de l API, ici on n extrait que le nom via .name
      for (let i = 0; i < data.length; i++) {
        console.log(i); // en JS on ne compte pas à partir de 1, 2, 3... mais à partir de 0, 1, 2...   Le premier tour de boucle renvoie donc 0 tout à fait normalement
        console.log(data[i].name); // à chaque tour de boucle, i est remplacé par 0, 1 , 2 ...  jusqu'à la fin de data.length
        console.log(data[i].description);
        console.log(data[i].altTxt);
        console.log(data[i]._id);
        console.log(data[i].imageUrl);
        console.log(data); // toute l'API
      }
    })
    .catch((error) => {
      // ici on prévoit le cas où l API n aura pas pu donner accès à son contenu
      console.log("Api non connectée");
      console.error(error); // variante de console.log qui fait chic et pro
      document.getElementById(
        "items"
      ).innerHTML = `<p>Une erreur s'est produite, veuillez nous excuser.</p>`;
    });
};

// etape 2 : on crée les fonctions dont on va avoir besoin
const addOneKanap = function () {
  const container = document.getElementById("items");
  container.innerHTML = `<a href="./product.html?id=42">
    <article>
      <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
      <h3 class="productName">Kanap Blabla name1</h3>
      <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
    </article>
    </a>`;
};

for (let i = 0; i < addOneKanap.length; i++){
  console.log(i);
  console.log(addOneKanap);
}

// addOneKanap(); // pas ici  , voir la ligne 54

// exercice: on aura besoin qu à chaque tour de boucle , on ait un addOneKanap qui s execute
// indice : ça ne se passe pas forcément ligne 50 :)

// si ça n affiche d un seul canap à l arrivée (== quand la boule est finie), c est pas grave (c est normal vue le code à ce stade)
