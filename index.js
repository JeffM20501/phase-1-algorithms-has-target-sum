function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i=0;i<array.length;i++){
    for(let j=0; j<array.length;j++){
      if(i!==j){
        if(array[i]+array[j]===target){
          return true
        }
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  0(n^2)
*/

/* 
  Add your pseudocode here
  if pair in array add up to target:
    return true
  else return false
*/

/*
  Add written explanation of your solution here
  i will first iterate and take the value then iterate again and add the second iterated va;ues to the first then add them up
  return true if the target is the same as the sum of the two numbers
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2,2,3,3], 4));
}

module.exports = hasTargetSum;
