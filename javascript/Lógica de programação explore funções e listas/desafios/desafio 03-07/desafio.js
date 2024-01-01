//function verificaIMC(altura, peso) {
//    let imc = peso / (altura * altura);
//}


//function calcularFatorial(numero) {
//    if (numero === 0 || numero === 1) {
//      return 1;
//    }
//  
//    let fatorial = 1;
//    for (let i = 2; i <= numero; i++) {
//      fatorial *= i;
//    }
//  
//    return fatorial;
//  }
//  
//  // Exemplo de uso
//  let numero = 5;
//  let resultado = calcularFatorial(numero);
//  console.log(`O fatorial de ${numero} é ${resultado}`);


//function converterDolarParaRealDolar(valorEmDolar) {
//    let cotacaoDoDolar = 4.80;
//    let valorEmReal = valorEmDolar * cotacaoDoDolar;
//    return valorEmReal.toFixed(2);
//}
//
//let valorEmDolar = 51;
//let valorEmReal = converterDolarParaRealDolar(valorEmDolar);
//console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReal}`);


//function calcularAreaPerimetroSalaRetangular(altura, largura) {
//    let area = altura * largura;
//    let perimetro = 2 * (altura + largura);
//    console.log(`Área da sala: ${area} metros quadrados`);
//    console.log(`Perímetro da sala: ${perimetro} metros`);
//}
//
//let altura = 3; // em metros
//let largura = 5; // em metros
//calcularAreaPerimetroSalaRetangular(altura, largura);


//function calcularAreaPerimetroSalaCircular(raio) {
//    let area = Math.PI * raio * raio;
//    let perimetro = 2 * Math.PI * raio;
//    
//    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
//}
//
//// Exemplo de uso
//let raio = 4; // em metros
//calcularAreaPerimetroSalaCircular(raio);


//function mostrarTabuada(numero){
//    for (let i = 1; i <= 10; i++){
//    let resultado = numero * i;
//    console.log(`${numero} x ${i} = ${resultado}`);
//    }
//}
//
//// Exemplo de uso
//let numero = 7;
//mostrarTabuada(numero);