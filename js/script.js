/* ==========
    Task 01
========== */    

let a = 3;
let b = 5;
let c;

let sum = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let per = a % b;
let eq = a == b;
let neq = a != b;
let greater = a > b;
let less = a < b;
let and = !a && !c;
let or = !a || !c;



let outputOne = 'let a = 3;\n';
outputOne += 'let b = 5;\n';
outputOne += 'let c;\n';
outputOne += '--------\n';
outputOne += 'a + b = ' + sum + "\n";
outputOne += 'a - b = ' + sub + "\n";
outputOne += 'a * b = ' + mul + "\n";
outputOne += 'a / b = ' + div + "\n";
outputOne += 'a % b = ' + per + "\n";
outputOne += 'a == b = ' + eq + "\n";
outputOne += 'a != b = ' + neq + "\n";
outputOne += 'a > b = ' + greater + "\n";
outputOne += 'a < b = ' + less + "\n";
outputOne += '!a && !c = ' + and + "\n";
outputOne += '!a || !c = ' + or + "\n";

alert(outputOne);

/* ==========
    Task 02
========== */    

let first_name = 'Piyumi Oshandi';
let last_name = 'Dissanayake';
let email = "diss0005@algonquinlive.com";

let output;

output = 'My name is ' + first_name + ' ' + last_name + '. ' + 'You can contact me at ' + email + '.';
alert(output);
