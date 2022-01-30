function funcao1(){
 console.log("mensagem criada por uma função declarativa")
}
 funcao1();

 var funcao2 = function(){
     console.log("mensagem criada por uma expressão de função");
 }
  funcao2();

  var funcao3 = () =>{
    console.log("mensagem criada por uma função arrow");
  }
  funcao3();