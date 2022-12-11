const fs = require("fs");
const result = fs.readFileSync("input2.txt").toString().split("\r\n");

const rounds = result.map(round => round.split("\ "));

let score = 0;
rounds.forEach(round => {
    switch (round[0]) {
        case "A":
            switch (round[1]) {
                case "X":
                    score += 4;//1 Rock 3 Draw
                    break;
                case "Y":
                    score += 8;//2 Paper 6 Win                 
                    break;
                case "Z":
                    score += 3;//3 scissor 0 Loss
                    break;
            }
            break;
        case "B":
            switch (round[1]) {
                case "X":
                    score += 1;//1 Rock 0 
                    break;
                case "Y":
                    score += 5;//2 Paper 3                 
                    break;
                case "Z":
                    score += 9;//3 scissor 6
                    break;
            }
            break;
        case "C":
            switch (round[1]) {
                case "X":
                    score += 7;//1 Rock 6 
                    break;
                case "Y":
                    score += 2;//2 Paper 0                 
                    break;
                case "Z":
                    score += 6;//3 scissor 3
                    break;
            }
            break;
    }
});
console.log(score);

score = 0;
rounds.forEach(round => {
    switch (round[0]) {
        case "A":
            switch (round[1]) {
                case "X"://Loose
                    score += 3;//0 3
                    break;
                case "Y":
                    score += 4;//3 1
                    break;
                case "Z":
                    score += 8;//6 2
                    break;
            }
            break;
        case "B":
            switch (round[1]) {
                case "X":
                    score += 1;//0 1
                    break;
                case "Y":
                    score += 5;//3 2
                    break;
                case "Z":
                    score += 9;//6 3
                    break;
            }
            break;
        case "C":
            switch (round[1]) {
                case "X":
                    score += 2;//0 2
                    break;
                case "Y":
                    score += 6;//3 3
                    break;
                case "Z":
                    score += 7;//6 1
                    break;
            }
            break;
    }
});
console.log(score);