const verificarLetraA = (string) => {
  const quantidade = (string.match(/a/gi) || []).length;

  const vezOuVezes = quantidade <= 1 ? 'vez' : 'vezes';

  return quantidade > 0
    ? `A letra 'a' aparece ${quantidade} ${vezOuVezes} na string`
    : "A letra 'a' não aparece na string";
};

module.exports = verificarLetraA;
