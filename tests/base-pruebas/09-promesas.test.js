import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';

describe('Pruebas en 09-promesas', () => {
  test('getHeroeByIdAsync debe de retornar un héroe', (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC',
      });
      done();
    });
  });

  test('getHeroeByIdAsync debe de obtener un error si héroe no existe', (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      console.log(error);
      // expect(error).toEqual(`No se pudo encontrar el héroe con id ${id}`);
      done();
    });
  });
});
