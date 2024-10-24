alert("Bem vindo ao jogo do número secreto!");
let nivelDeDificuldade = prompt("Qual nível de dificuldade você gostaria?");
nivelDeDificuldade = nivelDeDificuldade.toLowerCase(); 
let multiplicador = nivelDeDificuldade === "facil" ? 10 : 
                    nivelDeDificuldade === "medio" ? 100 : 
                    nivelDeDificuldade === "dificil" ? 1000 : 1;
let numeroSecreto = parseInt(Math.random()* multiplicador + 1) + 1;
let chute = undefined;
let tentativas = 1;

while(chute != numeroSecreto){
    chute = parseInt(prompt(`Tente adivinhar o número entre 1 e ${multiplicador}`));
    if (!isNaN(chute)){
        if (numeroSecreto == chute){
            break;
        }else{
            if (chute > numeroSecreto){
                alert(`o número secreto é menor que ${chute}`);
            }else{
                alert(`o número secreto é maior que ${chute}`);
            }
            tentativas ++;
            
        }
    }else{
        chute = parseInt(prompt("escreva um número válido!"))
    }    

}

let palavra = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Acertou o number ${numeroSecreto} com ${tentativas} ${palavra}`);