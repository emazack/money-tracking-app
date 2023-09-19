(function () {
    var wallet; 
    
    function getOperation(params) {
        return wallet.getOperation();
    }

    function findOperation(params) {

    }

    function getBalance(params) {
        return wallet.getBalance();
    }

    function removeOperation(params) {

    }

    function addOperation(params) {

    }

    document.addEventListener("DOMContentLoaded", function() {
        wallet = new Wallet();
    })
})();
