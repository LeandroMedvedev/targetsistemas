const eFibonacci = (numero) => {
  let x = 0;
  let y = 1;

  while (y < numero) {
    const temp = x;
    x = y;
    y = temp + y;
  }

  const resposta = y === numero || numero === 0 ? 'pertence' : 'não pertence';

  return `${numero} ${resposta} à sequência de Fibonacci`;
};

module.exports = eFibonacci;
