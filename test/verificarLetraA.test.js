const verificarLetraA = require('../src/questaoDois/verificarLetraA');

describe('Testando a função verificarLetraA', () => {
  test.each([
    ['Avenida Brasil', "A letra 'a' aparece 3 vezes na string"],
    ['Salamandra', "A letra 'a' aparece 4 vezes na string"],
    ['Araraquara', "A letra 'a' aparece 5 vezes na string"],
    ['Aa Aa Aa', "A letra 'a' aparece 6 vezes na string"],
    ['A', "A letra 'a' aparece 1 vez na string"],
    ['', "A letra 'a' não aparece na string"],
  ])(
    'Deve retornar a quantidade correta de letras \'a\' em "%s"',
    (entrada, esperado) => {
      expect(verificarLetraA(entrada)).toBe(esperado);
    }
  );
});
