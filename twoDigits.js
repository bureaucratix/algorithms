function addTwoDigits(num){
    let numArray = num.toString().split("")
    return  numArray.reduce((a, b) => parseInt(a) + parseInt(b))
}
