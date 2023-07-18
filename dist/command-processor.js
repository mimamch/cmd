"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandProcessor = void 0;
class CommandProcessor {
    constructor(events) {
        this.events = events;
    }
    /**
     * Parses and executes a command with the given arguments.
     * @deprecated use parse method instead
     *
     * @template E - The type of command to parse and execute.
     * @param {E} command - The command to parse and execute.
     * @param {...Parameters<T[E]>} args - The arguments to pass to the command handler.
     * @returns {ReturnType<T[E]>} - The result of executing the command.
     */
    parseCommand(command, ...args) {
        var _a, _b;
        return (_b = (_a = this.events)[command]) === null || _b === void 0 ? void 0 : _b.call(_a, args);
    }
    /**
     * Parses and executes a command with the given arguments.
     *
     * @template E - The type of command to parse and execute.
     * @param {E} command - The command to parse and execute.
     * @param {...Parameters<T[E]>} args - The arguments to pass to the command handler.
     * @returns {ReturnType<T[E]>} - The result of executing the command.
     */
    parse(command, ...args) {
        var _a, _b;
        return (_b = (_a = this.events)[command]) === null || _b === void 0 ? void 0 : _b.call(_a, args);
    }
    parseOrThrow(command, ...args) {
        if (!(command in this.events)) {
            throw new Error(`command ${command.toString()} is not registered`);
        }
        return this.events[command](args);
    }
}
exports.CommandProcessor = CommandProcessor;
exports.default = CommandProcessor;
