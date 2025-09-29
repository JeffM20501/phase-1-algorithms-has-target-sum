// runtime: O(n^2)
// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   for(let i=0;i<array.length;i++){
//     for(let j=i+1; j<array.length;j++){
//       if(array[i]+array[j]===target){
//         return true
      
//       }
//     }
//   }
//   return false
// }

// runtime: O(n)
function hasTargetSum(array, target){
  const seenNumbers={}
  for(const number of array){
    const compliment = target-number
    if(compliment in seenNumbers) return true
    seenNumbers[number]=true
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  O(1)
*/

/* 
  Add your pseudocode here
  create an empty object keep track of the numbers we have seen 
  iter array to find our compliment(target-array value)
  if any of our values is a key in our object return true otherwise add that number to our object
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
