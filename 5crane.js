console.time("Δt");
const fs = require("fs");
const data = fs.readFileSync("input5.txt").toString().split("\r\n");

const floors = data.slice(0, 8);
const tasks = data.slice(10);

//format stacks
let stacks = Array(9);
for (let i = 0; i < stacks.length; i++) {
    stacks[i] = [];
};
floors.forEach(floor =>{
    let stack = [];
    for (let i = 0; i < floor.length; i+=4) {
        stack.push(floor.substring(i, i+3));
    } 
    for (let i = 0; i < stack.length; i++) {
        if (stack[i] != "\   ") {
            stacks[i].push(stack[i].replace("[", "").replace("]", ""));
        }
    }
});
stacks.forEach(stack => stack.reverse());//we now have a 2dimensional array, very useful for array.prototype functions
let stacks2 = JSON.parse(JSON.stringify(stacks)); //save for sol2

tasks.forEach(task => {
    //format
    const { count, grab, put } = {count: parseInt(task.split(" ")[1]), grab: parseInt(task.split(" ")[3])-1, put: parseInt(task.split(" ")[5])-1};
    //execute
    for (let i = 0; i < count; i++) {
        const crate = stacks[grab].pop();
        stacks[put].push(crate);
    }
});
let solution = ""
stacks.forEach(stack => solution += stack.reverse()[0]);
console.log(solution);
console.timeEnd("Δt");
//2nd
console.time("Δt");
tasks.forEach((task, i) => {
    //format
    const { count, grab, put } = {count: parseInt(task.split(" ")[1]), grab: parseInt(task.split(" ")[3])-1, put: parseInt(task.split(" ")[5])-1};
    //execute
    const hook = [];
    for (let k = 0; k < count; k++) {
        hook.push(stacks2[grab].pop())
    }
    const onhook = hook.reverse();
    onhook.forEach(crate => stacks2[put].push(crate));
});
solution = ""
stacks2.forEach(stack => solution += stack.reverse()[0]);
console.log(solution);
console.timeEnd("Δt");