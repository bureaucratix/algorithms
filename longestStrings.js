function longestStrings(strArr) {
  let max = findMaxLength(strArr)
  const result = strArr.filter(str => str.length == max);
  return result;
}

function findMaxLength(strArr) {
  let max = 0
  strArr.forEach((str)=>{
    if (str.length > max){
      max = str.length
    }
  })
  return max
}
