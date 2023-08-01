module.exports = function reverse(n) {
    n = String(n);
    let result = "";
    for (let i = 0; i < n.length; i++) {
        if (n[i] !== "-") {
        result = n[i] + result;
        } ;
    };
    return Number(result);
};
