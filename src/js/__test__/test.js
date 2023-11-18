import { Validator } from "../validate";

test.each([
  ['wefFEW-345fg', "wefFEW-345fg"],
  ['выаыва', "Error in name"],
  ['-wefw_234234', 'Error in name'],
  ['2ferg_-ewf3r', 'Error in name'],
  ['egerg-_43_rt', 'egerg-_43_rt']
])(
  (`test name`), (name, trueName) => {
      expect(new Validator().validateUsername(name)).toBe(trueName);
  })

  test.each([
    ['8 (927) 000-00-00', '+79270000000'],
    ['+7 960 000 00 00', '+79600000000'],
    ['+86 000 000 0000', '+860000000000'],
    ['8927 000-00-00', '+79270000000'],
    ['+7-960-000-00-00', '+79600000000'],
    ['+86-000 000 00-00', '+860000000000'],
  ])(
    (`test number`), (number, trueNumber) => {
        expect(new Validator().validateNumber(number)).toBe(trueNumber);
    })