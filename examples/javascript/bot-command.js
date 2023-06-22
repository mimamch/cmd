const { CommandProcessor } = require("../../dist/index");
/**
 * POV: new user named "mimamch" joined group chat
 * ===========================
 * TODO: say hello to new user
 * Expected result: Hello mimamch welcome to the club 🥳
 */

/**
 * Creating new command which contain command "/sayhello"
 */
const userCommand = {
  "/sayhello": function (name) {
    return `Hello ${name} welcome to the club 🥳`;
  },
};
/**
 * Assign all created commands to CommandProcessor
 */
const userCommands = new CommandProcessor(userCommand);

const sayhelloResult = userCommands.parseCommand("/sayhello", "mimamch");
console.log(sayhelloResult);
