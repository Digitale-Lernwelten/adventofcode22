const fs = require("fs");
const result = fs.readFileSync("input3.txt").toString().split("\r\n");

const prios = [..."📚abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const sacks = result.map(sack => [sack.slice(0, (sack.length/2)), sack.slice(sack.length/2)] );
let score = 0;

sacks.forEach(sack => {
    let found;
    Array.from(sack[0]).forEach(item => sack[1].includes(item) ? found = prios.indexOf(item) : "");
    score += found;
});
console.log(score);

//2ndpart
const groups = [];
for (let i = 0; i < result.length; i+=3) {
    groups.push([result[i], result[i+1], result[i+2]]);
}

let score2 = 0;
groups.forEach(group =>{
    let shared = [];
    let found = 0;
    Array.from(group[1]).forEach(item=> group[2].includes(item) ? shared.push(item) : "");
    shared.forEach(item => {
        group[0].includes(item) && prios.indexOf(item) > found ? found = prios.indexOf(item)  : "";
    });
    score2 += found;
});
console.log(score2);