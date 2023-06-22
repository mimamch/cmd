"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandProcessor = void 0;
class CommandProcessor {
    constructor(events) {
        this.events = events;
    }
    /**
     * Parses and executes a command with the given arguments.
     *
     * @template E - The type of command to parse and execute.
     * @param {E} command - The command to parse and execute.
     * @param {...Parameters<T[E]>} args - The arguments to pass to the command handler.
     * @returns {ReturnType<T[E]>} - The result of executing the command.
     */
    parseCommand(command, ...args) {
        return this.events[command](args);
    }
}
exports.CommandProcessor = CommandProcessor;
exports.default = CommandProcessor;
