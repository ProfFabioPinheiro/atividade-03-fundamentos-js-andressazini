function valorFinal (vl, d){
    const valordesconto = vl*(d/100);
    const valorfinal = vl - valordesconto;
    console.log("O valor inicial do produto é R$" + vl + ".");
    console.log("Você ganhou um desconto de R$" + valordesconto + ", o valor ficou R$" + valorfinal + ".");
}

valorFinal(337, 20);