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
    return op && op.description && op.amount > 0 && typeof OpType[op.type] !== "undefined"
}