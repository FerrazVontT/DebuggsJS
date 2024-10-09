function salve(oi) {
    if(typeof oi != 'string'){
        throw new Error("O parametro deve ser uma string");
    } else {
        console.log(`Salve ${oi}, como você está?`);
    }
}

salve("Shirog");
salve(2);

console.log("teste");// a linha de cima vai apresentar um erro, então o codigo nem vai rodar esse consoloe.log