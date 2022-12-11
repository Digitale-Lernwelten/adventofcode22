const fs = require("fs");
const result = fs.readFileSync("input.txt").toString().split("\r\n");

let counter = 0;
let newArray = [];
result.forEach((string, i) => {
    if (!string.length == 0) {
        counter += (parseInt(string));
    } else {
        newArray.push(counter);
        counter = 0;
    }
    if (i == result.length - 1) {
        newArray.push(counter);
    }
});
//solution
console.log(Math.max(...newArray));

//2nd
let sumTopThree = 0;
for (let i = 0; i < 3; i++) {
    const currentMax = Math.max(...newArray);
    sumTopThree += currentMax;
    newArray.splice(newArray.indexOf(currentMax), 1);
}
//solution
console.log(sumTopThree);
