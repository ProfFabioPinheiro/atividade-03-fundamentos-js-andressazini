function trianguloRetangulo (c1, c2) {
    const cateto1 = c1*c1;
    const cateto2 = c2*c2;
    const somacatetos = cateto1 + cateto2;
    const h = Math.sqrt(somacatetos);
    console.log("A hipotenusa é " + h);
}

trianguloRetangulo(15, 8);