//Praticando JS a pedido na aula, coisa simples.

function calc(a, b) {
  return a + b;
}

console.log(calc(4, 4));

//----------------------

function parOuImpar(num) {
  if (num % 2 == 0) {
    console.log(`${num} É par.`);
  } else {
    console.log(`${num} É ímpar.`);
  }
}

parOuImpar(4);

const textGetter = document.querySelector(".gettingDados");

if (textGetter) {
  const userFront = {
    nome: textGetter.textContent,
    idade: 20,
  };
  console.log(userFront.nome, userFront.idade);
}
