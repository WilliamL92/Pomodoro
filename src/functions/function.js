export function customRound(nbr, max) {
    let res = nbr
    let zero = ""
    for (let i = 0; i < max - nbr.toString().length; i++) {
        zero += "0"
    }
    if (nbr.toString().length < max) {
        res = `${zero}${res}`
    }
    return res
};