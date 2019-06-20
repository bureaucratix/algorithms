function largestOfFour(fourArrays) {
  let newArray=[]
    fourArrays.forEach((arr)=>{
      let max = Math.max(...arr)
      newArray.push(max)
      })
    return newArray
}
