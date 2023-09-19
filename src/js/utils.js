const Wallet = require("./models/Wallet")

function findIndex(list, cb) {
    for (let i = 0; i < list.length; i++) {
        if (cb(list[i])) {
            return i;
        }
    }
    return -1
}

function getWallet() {
    const wallet = localStorage.getItem("wallet");
    if (!wallet) {
        return {
            balance: 0,
            operations: []
        }
    }
    return JSON.parse(wallet)
}

function isValidOperation(op) {
    return op && op.description && parseFloat(op.amount) > 0 && typeof Wallet.OpType[op.type] !== "undefined"
}

module.exports = {
    findIndex: findIndex,
    getWallet: getWallet,
    isValidOperation: isValidOperation
}