
// let name = "Jason";
// let age = 10;
// let isAdult = true;
// let countries = ["USA", "Mexico", "Spain"];
// let prices = [12.11, 9.99, 10.00, 11];
// let flags = [true, false, 0, 1, 1, false, 0];

// /*
//     [] = array
//     {} = object
//     "" or '' = string

//     function () {}
// */

// let x = { square: 300, root: 4 };

let array = [1, 2, 3, 4, 5];
console.log(array);

function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);
      // Decrease counter by 1
      counter--;
      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }

console.log(shuffle(array));


// let y = [{
//     firstName: "Jason",
//     age: 10,
//     pay: 1
// }, {
//     firstName: "James",
//     age: 12,
//     pay: 2
// }];


// // string, number, boolean

// // array, object
// // a collection of values

// let person = {
//     name: "Jason",
//     age: 65,
//     country: "USA",
//     children: [{
//         name: "James",
//         age: 4,
//         country: "USA",
//         gender: "Male"
//     }, 
//     {
//         name: "Jasmine",
//         age: 10,
//         country: "USA",
//         gender: "Female",
//         isFirstBorn: true
//     }]
// };
// const jsonString = JSON.stringify(person);
// const jsonObj = JSON.parse(jsonString);
// console.log(person.name);
// console.log(jsonObj.name);
































// // /* write a function to check if a list of ages contains any age > 17 */


// // const ages = [1, 2, 3, 6, 8, 12, 13, 16, 17, 29, 30, 18];

// // // Examle 1
// // let containAdult = ages.filter((age) => age > 17);
// // if (containAdult.length > 0) {
// //     console.log("Example 1....Contains Adult");
// // }

// // // ------------------------------------------------------------

// // // Example 2
// // containAdult = ages.some((age) => age > 17);

// // if(containAdult) {
// //     console.log("Example 2....Contains Adult");
// // }

// // // Example 3
// // let hasAge = false;
// // ages.forEach(age => {
// //     if (age > 17 && hasAge == false) {
// //         console.log("Example 3...Contains Adult");
// //         hasAge = true;
// //     }
// // });


// // // Example 4
// // const results = ages.map(age => {
// //     if (age > 17) {
// //         return "Example 4...Contains Adult";
// //     }
// //     return "";
// // });

// // console.log(results);


// // /* write a function that checks each value contains a number greater than 5. If number is greater than 5 return the number and the string "Greater than 5" */
// // /* write a function that returns all numbers less than 15 */
// // /* write a function that returns all numbers squared */




// function swap(obj, key) {
//     console.log(obj[key]);
//     obj[obj[key]] = key;
//     delete obj[key];
//     return obj;
// }

// console.log(swap({a: "b"}, "a"));