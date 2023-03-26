function greeting(name) {
    console.log("Hello ", name);
}

greeting("Jason Shelley");

function removeFromString(str, index, count) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        console.log(i, index, count, index + count);
        if (i >= index && i <= (index + count))  continue;
        
        newStr += str[i];
    }
    return newStr;
}

//display each letter of the word hello EXCEPT the letters l
// h
// e
// l
// l
// o

let word = "hello"; // string
for(let i = 0; i <= word.length; i++) {
    
    let l = "l"; // exclude the letter l
    let character = word[i];

    if (character != l) {
        console.log(character);
    }
}
console.log(removeFromString("hello123", 3, 3));

for (let i = 1; i <= 5; i++){
    console.log(`9 x ${i} = `, 9 * i)
}

function isVowel(letter) {
    let vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i <= vowels.length -1; i++) {
        if (vowels[i] === letter) return true;
    }
    return false;
}

let s = "Jane";
for (let i = 0; i <= s.length - 1; i++) {
    let letter = s[i];
    if (isVowel(letter)) {
        console.log(letter);
    }
}
/*
Numbers
-------------------------------------------------------------
Example 1: Print numbers 1 to 10

Example 2: Print your name 5 times

Example 3: In a range of numbers 1 to 50 only print numbers greater than 45

Example 4: Create multication table  for 9

Output
9 x 1 = 9
9 x 2 = 18
9 x 3 = 27
9 x 4 = 36
9 x 5 = 45

Example 5: Create function that will output multication table for any number

Strings
---------------------------------------------------------------
Example 6: Create function to print out only vowels of a string


Example 7: Create function to add right padding (white space) to each string. The amount of padding added should be base on the length of string

Example 8:

Example 9:

Example 10:

Arrays
--------------------------------------------------------------
let people = ["Jason", "Jill", "Amber", "Patrick", "Dean"];

Example 11: Print out each name twice
output:
Jason
Jason
Jill
Jill
Amber
Amber
Patrick
Patrick
Dean
Dean

Example 12: Print out only names that start with D
output:
Dean

Example 13: Print out each name with it's index
output:
Jason - 0
Jill - 1
Amber - 2
Patrick - 3
Dean - 4

Example 14: Reverse the order of people
output:
Dean
Patrick
Amber
Jill
Jason
*/

