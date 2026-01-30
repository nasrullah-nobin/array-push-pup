const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const friend = ["Rofiq", "Korim", "Jolil", "Nasir", "Shamim"];
friend.push("sogir", "Kobir");
number.push(10, 11);
console.log(number, friend);
friend.pop();
number.pop();
console.log(number, friend);
number.unshift(20, 30);
friend.unshift("rohmot", "borkot");
console.log(number, friend);
number.shift();
friend.shift();
console.log(number, friend);

// pop ba shift kore je element ta kete dewa hoi seta ke o ark ta variable e joma rakha jai

const num = [1, 2, 3, 4, 5, 6];
const fr = ["roshid", "jamil", "korim"];
const box1 = num.shift();
const box2 = fr.shift();
console.log(box1, box2);

// includes ati check kore Array er modde niddisto upadhan ache ki na?
console.log(num.includes(4));
console.log(fr.includes("jamil"));

// Array er upadhan koita seta check kora jai length dia
console.log(num.length);

// Array.isArray dia check kora jai je property ta Array ki na
console.log(Array.isArray(num));
const mission = "i want become a software developer";
console.log(Array.isArray(mission));

// indexof ati dia Array er opadhan er index check kora jai
console.log(num.indexOf(5));

// Array theke string e convert korte use hoi join method
console.log(num.join(" "));

// concat methhod use hoi 2 ta Array ke ekta array bananor kaje
console.log(num.concat(fr));

// slice ata Array/string er kono ekta aungsho ke vag kore dai
const learn = "I am learning web dev";
const result = learn.slice(0, 4);
console.log(result);

// splice() array-এর ভেতর থেকে element remove / add / replace করে এবং মূল array পরিবর্তন করে → example:
let arr = [10, 20, 30];
console.log(arr);
arr.splice(1, 1, 99); 
console.log(arr);
