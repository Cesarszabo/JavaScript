function calculadora(){
const operação = Number(prompt("escolha a operação: \n 1 - Adição(+) \n 2 - Subtração(-) \n 3 - Multiplicação(*) \n 4 - Divisão Real(/) \n 5 - Divisão Inteira(%) \n 6 - Potenciação(**)"));
 
if (operação >= 7 || !operação) {
    alert("opção inválida");
    calculadora();
}else {

let n1 = Number(prompt("insira o primeiro valor"));
let n2 = Number(prompt("insira o segundo valor"));
let resultado;

if (!n1 || !n2){
    alert("Favor digitar apenas números");
    calculadora();
}else{

// if (operação == 1){
//     soma()
// }else if (operação == 2){
//     subtração();
// }else if (operação == 3){
//     Multiplicacao();
// }else if (operação == 4){
//     divisao_real();
// }else if (operação == 5){
//     divisao_inteira();
// }else if (operação == 6){
//     Potenciacao();
// }

switch (operação){
    case 1:
        soma();
        break;
    case 2:
        subtração();
        break;
    case 3:
        Multiplicacao();
        break;
    case 4 :
        divisao_real();
        break;
    case 5:
        divisao_inteira();
        break;
    case 6:
        Potenciacao();
        break;
}
}

function soma(){
    resultado = n1 + n2;
    alert(`${n1} + ${n2} = ${resultado}`);
    novaoper();}
function subtração(){
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`); 
    novaoper();   }
function Multiplicacao(){
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`);
    novaoper();}
function divisao_real(){
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`);
    novaoper();}
function divisao_inteira(){
    resultado = n1 % n2;
    alert(`o resto da divisão entre ${n1} e ${n2} é ${resultado}`);
    novaoper();}
function Potenciacao(){
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
    novaoper();}                                  
}
}

function novaoper(){ 
    let opcao = Number(prompt(" Desaja realizar outra opção? \n 1 - Sim \n 2 - Não"));
    
    if (opcao == 1){
     calculadora ();
    }else if (opcao == 2){
     alert("Até a próxima!!");
    }else{ 
     alert("escolha uma opção válida");
    novaoper();
    }
}


calculadora();
