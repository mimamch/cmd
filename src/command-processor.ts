type Commands<T = any> = {
  [key: string]: (args: T) => unknown;
};

class CommandProcessor<T extends Commands> {
  private events: T;
  constructor(events: T) {
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
  parseCommand<E extends keyof T>(
    command: E,
    ...args: Parameters<T[E]>
  ): ReturnType<T[E]> {
    return this.events[command](args) as ReturnType<T[E]>;
  }
}

export default CommandProcessor;
export { CommandProcessor, Commands };
