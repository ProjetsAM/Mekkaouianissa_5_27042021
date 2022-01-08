onload = function() {
    const id = new URL(document.location.href).searchParams.get("id");
    // Fonction qui affiche le numéro de commande , en récupérant l'id de commande dans l'url ici (orderId)
    function displayOrder() {
        let clientId = document.getElementById('orderId');
        clientId.innerText = id;
        if (id == null) {
            alert("Nous rencontrons un problème avec votre commande");
        }
        localStorage.clear();   
    };
    displayOrder();   
};