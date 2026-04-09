function boasVindas (nome, hora) {
    if(hora >= 12 && hora <=18) {
        console.log("Boa tarde, " + nome + "!")
    }else if(hora >= 4 && hora <12) {
        console.log("Bom dia, " + nome + "!")
    }else {
        console.log("Boa noite, " + nome + "!")
    }
}

boasVindas("Andressa", 3)