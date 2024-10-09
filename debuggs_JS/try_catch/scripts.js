// let b = 2;

try {
    let a = b + 5;

} catch(erro){
    console.log(erro);

} finally{ // executado idependente do resultado do try/catch -- pode existir só com o try

    console.log("Executou");
}

console.log("Teste"); // vai aparecer

// usado para partes que não são essenciais para o programa 