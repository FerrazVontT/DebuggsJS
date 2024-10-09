let a = 1;
let b = 3;
let c = 22;

if(c > a) {
    a = b;
}
debugger; // --> para o código quando chega na linha do debugger

for(let i = 5; i > 0; i--){
    b++;
    a = a + c -13;
    c += 2 ;
    debugger;
}

if(b == a) {
    a++;
} else {
    a = a + b + 3 + c;
}

debugger;

a = a * b

debugger;