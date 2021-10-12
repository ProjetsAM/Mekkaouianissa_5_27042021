onload = function() {
    console.log("je suis sur la page confirmation");

    let clientId = document.getElementById('orderId');

    const displayOrder = ()=> {
        if(clientId){
            clientId.innerText = "Panier validé";
        }
    }
    
    displayOrder();
};