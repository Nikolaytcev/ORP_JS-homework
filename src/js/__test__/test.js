import { orderByProps } from "../sort";
import { attackVariants } from "../attack";

test("testing sort function", () => {
    expect(orderByProps({name: 'мечник', health: 10, level: 2, attack: 80, defence: 40}, ["name", "level"])).toEqual([
        {key: "name", value: "мечник"},
        {key: "level", value: 2},
        {key: "attack", value: 80}, 
        {key: "defence", value: 40},
        {key: "health", value: 10}
      ])
});

test('testing attackVarints function', function() {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
      }
    ]	
  };
  expect(attackVariants(character)).toEqual([{
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон'
  }, 
  {
    id: 9,
    name: 'Нокаутирующий удар',
    icon: 'http://...',
    description: 'Описание недоступно',
  }])
})
