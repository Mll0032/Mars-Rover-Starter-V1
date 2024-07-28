const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edtest the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {
// Practice arrown functions
// test("throws error if a command type is NOT passed into the constructor as the first parameter", () => {
//   expect(() => new Command()).toThrowError('Command type required.');
// });

//.toThrow from jestjs.io Use .toThrow to test what that a function throws when it is called
//new Error creates my user defined error wich now will say 'Command type required.' when there are no commands passed to the function
  test("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect(function() { new Command(); }).toThrow(new Error('Command type required.'));
  });

  test("constructor sets command type", function() {
    let command = new Command('MOVE');
    expect(command.commandType).toEqual('MOVE');
  });

  test("constructor sets a value passed in as the 2nd argument", function() {
    let command = new Command('MOVE', 20);
    expect(command.value).toEqual(20);
  });

});