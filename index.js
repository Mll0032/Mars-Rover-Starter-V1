const Rover = require('./rover.js');
const Message = require('./message.js');
const Command = require('./command.js');

// let modeCommand = new Command('MODE_CHANGE', 'LOW_POWER');
// let moveCommand = new Command('MOVE', 12000);

// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);

let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands', commands);
let rover = new Rover(98382);    // Passes 98382 as the rover's position.
let response = rover.receiveMessage(message);

console.log(response);