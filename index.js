const Rover = require('./rover.js');
const Message = require('./message.js');
const Command = require('./command.js');

//check to see what happens when no command type is input 
// let commands = [new Command()];
// console.log(commands);

//check to see if command class is working
// let modeCommand = new Command('MODE_CHANGE', 'LOW_POWER');
// console.log(modeCommand);
// let moveCommand = new Command('MOVE', 12000);
// console.log(moveCommand);

// check to see if basic rover information is there
// let basicRover = new Rover();
// console.log(basicRover);

//call the entire projects classes and functions to see if we get appropriate output
// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);
// let rover = new Rover(98382);    // Passes 98382 as the rover's position.
// let response = rover.receiveMessage(message);
// console.log(rover)
// console.log(response);


