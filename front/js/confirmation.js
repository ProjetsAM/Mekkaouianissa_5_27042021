onload = function() {
    let orderId = "data.orderId"; 
    const id = url.searchParams.get("id");
    // Fonction qui affiche le numéro de commande , en récupérant l'id de commande dans l'url ici (orderId)
    function displayOrder() {
        let clientId = document.getElementById('orderId');
        clientId.innerText = id;
        console.log(id)
        if (orderId == null) {
            alert("Nous rencontrons un problème avec votre commande");
        }
        localStorage.clear();   
    };
    displayOrder();   
};