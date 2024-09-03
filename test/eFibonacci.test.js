const eFibonacci = require('../src/questaoUm/eFibonacci');

describe('Testando a função eFibonacci', () => {
  test.each([
    [0, 'pertence'],
    [1, 'pertence'],
    [2, 'pertence'],
    [3, 'pertence'],
    [5, 'pertence'],
    [8, 'pertence'],
    [13, 'pertence'],
    [21, 'pertence'],
    [34, 'pertence'],
    [55, 'pertence'],
    [89, 'pertence'],
    [144, 'pertence'],
    [233, 'pertence'],
    [377, 'pertence'],
    [610, 'pertence'],
    [987, 'pertence'],
    [1597, 'pertence'],
    [2584, 'pertence'],
    [4181, 'pertence'],
    [6765, 'pertence'],
    [4, 'não pertence'],
    [6, 'não pertence'],
    [7, 'não pertence'],
    [9, 'não pertence'],
    [10, 'não pertence'],
  ])(
    'Deve retornar que %i %s à sequência de Fibonacci',
    (entrada, esperado) => {
      expect(eFibonacci(entrada)).toBe(
        `${entrada} ${esperado} à sequência de Fibonacci`
      );
    }
  );
});
