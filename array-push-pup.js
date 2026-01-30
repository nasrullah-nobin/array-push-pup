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

const num = [3,4,3,1,7,5];
const fr = ['roshid', 'jamil', 'korim'];
const box1 = num.shift();
const box2 = fr.shift();
console.log(box1, box2);