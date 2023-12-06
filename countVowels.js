/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    //this is array of vowels
    const vowels=['a','e','i','o' ,'u'];


    // this will store the count of variable
let count =0;
for (const char of str.toLowerCase()){
  // this will check whether the char is vowel or not
  if(vowels.includes(char)){
    // agar answer yes hai to it'll increment
    count++;
  }
}

return count;




}

module.exports = countVowels;