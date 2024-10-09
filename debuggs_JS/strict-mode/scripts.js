"use strict" // --> deixa o JS mais rigoroso/ deve ser declarado no topo/ ajuda a codificar de forma correta

//testando = "teste"; --> erro por conta do strict

let testando = "teste";

function teste() {
    "use strict"
    let opa = console.log("teste");
}

teste();
console.log(testando);
// ---- no podemos definir propriedades com valores primitivos:
//false.prop = "";
//"teste".prop = "                                                                                ";
