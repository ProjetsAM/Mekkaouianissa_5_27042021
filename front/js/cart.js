onload = function() {
    console.log("je suis sur la page cart");
    
    // etape 1 on crée les variables let et les variables const dont on a besoin pour le fichier
    let totalItems = document.getElementById('totalQuantity');
    let totalPrice = document.getElementById('totalPrice');

    // étape 2 : on crée des functions avec un nom clair (en anglais) pour savoir, en relisant le code, ce qui est fait ici en JS
    const displayTotalQuantity = ()=> {  // il s agit ici d une fonction flechee , j aurais pu ecrire : const displayTotalQuantity = function() {...}
        if(totalItems){
            // le if sert à verifier que le #totalQuantity exsitera bien dans la page concernée et éviter, si ce n est plus le cas dans le futur, de péter toute la page en indiquant une erreur
            totalItems.innerText = "5"; // histoire de faire une variante, si tu n'as que du texte à insérer (sans balises) alors innerText suffira
        }
    }

    const displayTotalPrice= ()=> {
        if(totalPrice) { 
            // on a un if pour etre sûr que le #totalPrice existera bien dans le DOM avant d'aller + loin en JS
            totalPrice.innerHTML = "<bold>420</bold>";  // ajouter le <span> apportait pas grand chose, j ai pimenté le innerHTML avec <bold>
        }
    }

    // étape 3 : on appelle les fonctions pour qu'elles soient executées (au dessus, on les a juste définies pour leur dire quoi faire au moment où on les appellera)
    displayTotalQuantity();
    displayTotalPrice();
};
