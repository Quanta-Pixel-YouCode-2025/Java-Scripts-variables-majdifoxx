let x = 5;
let y = 10;

console.log("before swap : x = " + x + ", y = " + y);

x = x + y;
y = x - y;
x = x - y;

console.log("after swap : x = " + x + ", y = " + y);
