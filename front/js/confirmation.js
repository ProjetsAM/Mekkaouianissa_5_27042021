onload = function() {
    //On créé une constante qui va récupérer les données de la nouvelle url
    const id = new URL(document.location.href).searchParams.get("id");
    // Fonction qui affiche le numéro de commande , en récupérant l'id de commande dans l'url ici (orderId)
    function displayOrder() {
        let clientId = document.getElementById('orderId');
        clientId.innerText = id;
        if (id == null) {
            alert("Nous rencontrons un problème avec votre commande");
        }
        // On vide le localstorage une fois la commande validée
        localStorage.clear();   
    };
    displayOrder();   
};