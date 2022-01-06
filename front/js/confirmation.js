onload = function() {
    // Fonction qui affiche le numéro de commande , en passant l'id de commande dans l'url ici (orderId)
    function displayOrder() {
        let clientId = document.getElementById('orderId');
        clientId.innerText = localStorage.getItem("orderId");
        console.log(localStorage.getItem("orderId"))
        localStorage.clear();   
        if (orderId == null) {
            alert("Nous rencontrons un problème avec votre commande");
        }
    };
    displayOrder();
    
    
    
};