# @mimamch/cmd - Powerful and Lightweight Command Processing Library for Interactive Applications

`@mimamch/cmd` is a library for processing and handling commands in text-based applications. This library provides an efficient way to manage and execute commands provided by users.

## Key Features

- **Command Processing**: The library allows you to process commands provided by users easily and efficiently.
- **Command Handling**: You can define handlers for each command that will be executed when the command is called.
- **Defined Arguments and Types**: The library supports the definition of command arguments and corresponding data types for each command, ensuring clarity and validity of the received arguments.
- **Flexible Execution**: You can execute commands by providing arguments that match the command definition, ensuring accurate command execution.
- **Defined Return Messages**: Each command can produce a return value according to the specified data type, allowing you to provide appropriate responses to users.

## Installation

You can install `@mimamch/cmd` using npm, the package manager for Node.js. Run the following command:

```
npm install @mimamch/cmd
```

## Usage

To use `@mimamch/cmd`, follow these steps:

1. Define your custom commands and their corresponding handlers.
2. Create an instance of the `CommandProcessor` class and pass your commands to it.
3. Use the `parseCommand` method to execute commands with the specified arguments.

Here's an example of how to use `@mimamch/cmd`:

```javascript
const { CommandProcessor } = require("@mimamch/cmd");

// For JS module import
// import CommandProcessor from "@mimamch/cmd";

// Define custom commands and their handlers
const commands = {
  "/sayhello": function (name) {
    return `Hello ${name} welcome to the club 🥳`;
  },
};

// Create a CommandProcessor instance with the defined commands
const commandProcessor = new CommandProcessor(commands);

// Execute the "/sayhello" command with the argument "mimamch"
const sayHelloResult = commandProcessor.parseCommand("/sayhello", "mimamch");
console.log(sayHelloResult);
```

For more examples and usage scenarios, you can refer to the [`examples`](examples/javascript) file in the examples directory.

## Documentation

For detailed documentation, including guides and API references, please visit the [official documentation](https://github.com/mimamch/cmd).

## Contributing

Contributions are welcome! Please follow the guidelines outlined in the [CONTRIBUTING.md](https://github.com/mimamch/cmd/blob/main/CONTRIBUTING.md) file.

## License

This library is licensed under the [MIT License](https://github.com/mimamch/cmd/blob/main/LICENSE).
