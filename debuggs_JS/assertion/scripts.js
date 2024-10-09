let arr = [1, 2, 3, 4, 5];
let arr2 = []; // com algum dado aqui, não tem erro ao rodar a primeira function

function iterarArr(arr) {
    if(arr.length == 0){
        throw new Error("O array precisa ter pelo menos um elemento");
    } else {
        for(let i = 0; i < arr.length; i++){
            console.log(i);
        }
    }
}

function arrVazio(arr) {
    if(arr.length > 0){
        throw new Error("O array não pode ter elementos");
    } else {
        console.log("Agora deu certo!");
    }
}

iterarArr(arr);
iterarArr(arr2);
arrVazio(arr);
arrVazio(arr2);