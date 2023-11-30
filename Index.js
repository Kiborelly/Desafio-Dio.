let nomeNivel = ["Mateus",500]
let classeHeroi = ""

if(nomeNivel[1] <= 1000){
    classeHeroi = "Ferro"
}
else if(nomeNivel[1] > 1000 && nomeNivel[1] <= 2000){
    classeHeroi = "Bronze"
}
else if(nomeNivel[1] > 2000 && nomeNivel[1] <= 5000){
    classeHeroi = "Prata"
}
else if(nomeNivel[1] > 6000 && nomeNivel[1] <= 7000){
    classeHeroi = "Ouro"
}
else if(nomeNivel[1] > 7000 && nomeNivel[1] <= 8000){
    classeHeroi = "Platina"
}
else if(nomeNivel[1] > 8000 && nomeNivel[1] <= 9000){
    classeHeroi = "Ascendente"
}
else if(nomeNivel[1] > 9000 && nomeNivel[1] <= 10000){
    classeHeroi = "Imortal"
}
else if(nomeNivel[1] >= 10001){
    classeHeroi = "Radiante"
}
else{console.log("Nao foi solicitado a criação de um nivel de heroi entre 5001 e 6000.")}

console.log("O Herói de nome " + (nomeNivel[0]) + " está no nível de " + (classeHeroi))