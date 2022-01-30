var jogador1 = 0;
var jogador2 = 0;
var placar;  

//If ternario
jogador1 == 0 && jogador2 == 0 ? console.log("jogo empatado") : stop; 

    if (jogador1 > 0) {
                console.log("Jogaodor 1 marcou gol!!");
                placar = jogador1 > jogador2;

            } else if (jogador2 > 0 ) {
                console.log("Jogador 2 marcou gol!!");
                placar = jogador2 > jogador1;
            } 
            else { 
                console.log("nenhum jogador fez gol");
            }
           
            switch (placar) {
                case placar = jogador1 > jogador2:
                console.log("jogador 1 venceu!!");
                break;
                case placar = jogador2 > jogador1:
                    console.log("jogador 2 venceu!!");
                    break;
                    default: 
                    console.log("ninguém ganhou");

                 }


