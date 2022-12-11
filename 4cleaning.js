const fs = require("fs");
const result = fs.readFileSync("input4.txt").toString().split("\r\n");

let score = 0
result.forEach(team => {
    const room = team.split(",").map(range => [parseInt(range.split("-")[0]), parseInt(range.split("-")[1])]);
         if (room[0][0] >= room[1][0] && room[0][1] <= room[1][1]) { score += 1;}
    else if (room[1][0] >= room[0][0] && room[1][1] <= room[0][1]) { score += 1;}
});
console.log(score);
//2nd
score = 0
result.forEach(team => {
    const room = team.split(",").map(range => [parseInt(range.split("-")[0]), parseInt(range.split("-")[1])]);
         if (room[0][0] >= room[1][0] && room[0][0] <= room[1][1]) { score += 1;}
    else if (room[0][1] >= room[1][0] && room[0][1] <= room[1][1]) { score += 1;}
    else if (room[1][0] >= room[0][0] && room[1][0] <= room[0][1]) { score += 1;}
    else if (room[1][1] >= room[0][0] && room[1][1] <= room[0][1]) { score += 1;}
});
console.log(score);