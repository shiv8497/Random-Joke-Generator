# Random Joke API Fetcher

A simple Node.js application that fetches a random joke from an online joke API and displays it in the console.

## Overview

This application demonstrates how to:
- Make HTTPS requests using Node.js
- Consume a public API
- Handle API responses
- Parse JSON data
- Handle potential errors during API calls

## Features

- Fetches a random joke from an online API
- Displays joke type, setup, and punchline
- Error handling for API requests
- Simple, straightforward implementation

## Prerequisites

- Node.js (version 12 or higher recommended)
- Internet connection

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shiv8497/Random-Joke-Generator
```

2. Navigate to the project directory:
```bash
cd Randomjoke
```

3. No additional dependencies are required as this uses Node.js built-in `https` module

## Usage

Run the application using Node.js:
```bash
node RandomJoke.js
```

Each time you run the script, it will fetch and display a new random joke.

## Code Explanation

### Key Components
- `https.get()`: Makes an HTTPS request to the joke API
- `response.on('data')`: Accumulates incoming data chunks
- `response.on('end')`: Processes the complete response
- `JSON.parse()`: Converts the response into a JavaScript object

### API Used
- [Official Joke API](https://official-joke-api.appspot.com/random_joke)

## Error Handling

The application includes error handling for:
- Network issues
- API request failures
- JSON parsing errors

## Potential Improvements

- Add retry mechanism for failed requests
- Implement command-line arguments to customize joke fetching
- Create a more robust error handling system
- Add caching of jokes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open-source and available under the MIT License.

## Author

Shivam Kumar Mankar

## Acknowledgments

- Node.js Documentation
- Official Joke API
