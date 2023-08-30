type Commands = {
  [key: string]: (...args: any[]) => unknown;
};

class CommandProcessor<T extends Commands> {
  private events: T;
  constructor(events: T) {
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
  parseCommand<E extends keyof T>(
    command: E,
    args: Parameters<T[E]>
  ): ReturnType<T[E]> {
    return this.events[command]?.(...args) as ReturnType<T[E]>;
  }

  /**
   * Parses and executes a command with the given arguments.
   *
   * @template E - The type of command to parse and execute.
   * @param {E} command - The command to parse and execute.
   * @param {...Parameters<T[E]>} args - The arguments to pass to the command handler.
   * @returns {ReturnType<T[E]>} - The result of executing the command.
   * @returns {null} - When the command is not registered.
   */
  parse<E extends keyof T>(
    command: E,
    args: Parameters<T[E]>
  ): ReturnType<T[E]> {
    return this.events[command]?.(...args) as ReturnType<T[E]>;
  }

  /**
   * Parses and executes a command with the given arguments.
   *
   * @template E - The type of command to parse and execute.
   * @param {E} command - The command to parse and execute.
   * @param {...Parameters<T[E]>} args - The arguments to pass to the command handler.
   * @returns {ReturnType<T[E]>} - The result of executing the command.
   *
   * @throws {Error} - If the command is not registered.
   */
  parseOrThrow<E extends keyof T>(
    command: E,
    args: Parameters<T[E]>
  ): ReturnType<T[E]> {
    if (!(command in this.events)) {
      throw new Error(`command ${command.toString()} is not registered`);
    }
    return this.events[command](...args) as ReturnType<T[E]>;
  }
}

export default CommandProcessor;
export { CommandProcessor, Commands };
