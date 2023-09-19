(function () {
    let wallet;

    function getOperation() {
        try {
            return wallet.getOperation();
        } catch (error) {
            console.error(e);
        }
    }

    function findOperation(val) {
        try {
            return wallet.findOperation(val)
        } catch (error) {
            console.error(e);
        }
    }

    function getBalance() {
        try {
            return wallet.getBalance();
        } catch (error) {
            console.error(e);
        }
    }

    function removeOperation(id) {
        try {
            wallet.removeOperation(id);
        } catch (e) {
            console.error(e);
        }
    }

    function addOperation(op) {
        try {
            wallet.addOperation(op)
        } catch (error) {
            console.error(e);
        }
    }

    document.addEventListener("DOMContentLoaded", function () {
        wallet = new Wallet();
    })
})();
