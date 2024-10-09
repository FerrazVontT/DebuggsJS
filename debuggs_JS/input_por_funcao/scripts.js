function checarNum (num){
    let numero = Number(num);
    if(Number.isNaN(numero)){
        console.log("Por favor digite apenas números");
    }
    else {
        console.log(numero);
    }
}
checarNum(3);
checarNum("asdpk");

let numero = prompt("Digite um número: ");

checarNum(numero);