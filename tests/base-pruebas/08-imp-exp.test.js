import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un héroe por ID', () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });
});

test('getHeroeById debe retornar undefined si no existe el ID', () => {
  const id = 100;
  const hero = getHeroeById(id);
  expect(hero).toBeFalsy();
});

//Tarea
// Debe retornar un arreglo con los héroes de DC
// length === 3
// toEqual al array filtrado

test('getHeroesByOwner debe de retornar un arreglo con los héroes de DC', () => {
  const owner = 'DC';
  const heroes = getHeroesByOwner(owner);
  expect(heroes.length).toEqual(3);
  expect(heroes).toEqual([
    { id: 1, name: 'Batman', owner: 'DC' },
    { id: 3, name: 'Superman', owner: 'DC' },
    { id: 4, name: 'Flash', owner: 'DC' },
  ]);
});

test('getHeroesByOwner debe de retornar un arreglo con los héroes de Marvel', () => {
  const owner = 'Marvel';
  const heroes = getHeroesByOwner(owner);
  expect(heroes.length).toEqual(2);
  expect(heroes).toEqual([
    { id: 2, name: 'Spiderman', owner: 'Marvel' },
    { id: 5, name: 'Wolverine', owner: 'Marvel' },
  ]);
});
