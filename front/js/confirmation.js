onload = function() {
    console.log("je suis sur la page confirmation");

    
    function displayOrder() {
        let clientId = document.getElementById('orderId');
        clientId.innerText = localStorage.getItem("orderId");
        console.log(localStorage.getItem("orderId"))
        localStorage.clear();   
    }
    displayOrder();
};