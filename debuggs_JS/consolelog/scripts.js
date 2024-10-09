let a = 1;
let b = 3;
let c = 22;

if(c > a) {
    a = b;
}
console.log(a);

for(let i = 5; i > 0; i--){
    b++;
    a = a + c -13;
    c += 2 ;
    console.log(a);
}

if(b == a) {
    a++;
} else {
    a = a + b + 3 + c;
}

console.log(a);

a = a * b

console.log(a);