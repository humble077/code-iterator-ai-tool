# Code Iterator AI Tool

A web application that helps improve your code using AI. The tool allows you to submit code and a prompt describing how you want to improve it, and returns an AI-generated improved version.

## Features

- Submit code for improvement
- Specify improvement requirements
- Get AI-generated improved code
- Clean and intuitive user interface
- Real-time error handling

## Tech Stack

- Frontend: React, TypeScript
- Backend: Node.js, Express, TypeScript
- AI: OpenAI API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- OpenAI API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/code-iterator-ai-tool.git
   cd code-iterator-ai-tool
   ```

2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd ../client
   npm install
   ```

4. Create a `.env` file in the server directory with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   ```

### Running the Application

1. Start the server:
   ```bash
   cd server
   npm start
   ```

2. Start the client:
   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Paste your code in the "Your Code" textarea
2. Enter your improvement request in the "Improvement Request" textarea
3. Click "Improve Code" to get the AI-generated improved version
4. View the improved code in the results section

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs both the client and server in development mode.

### `npm run install-all`

Installs all dependencies for both client and server.

### `npm run build`

Builds the app for production to the `build` and `dist` folders.

### `npm test`

Launches the test runner in both client and server.

### `npm run format`

Formats all code files using Prettier.

### `npm run lint`

Runs ESLint to check for code quality issues.

## Project Structure

```
code-iterator-ai-tool/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source files
│   ├── package.json       # Frontend dependencies
│   └── tsconfig.json      # TypeScript configuration
├── server/                # Node.js backend
│   ├── src/              # Source files
│   ├── package.json      # Backend dependencies
│   └── tsconfig.json     # TypeScript configuration
├── package.json          # Root dependencies
├── README.md            # Project documentation
└── .gitignore           # Git ignore rules
```

## Environment Variables

### Server (.env)
- `OPENAI_API_KEY`: Your OpenAI API key
- `PORT`: Server port (default: 3001)

### Client (.env)
- `PORT`: Client port (default: 3002)

## Acknowledgments

- OpenAI for providing the GPT API
- React and Node.js communities for their amazing tools and libraries 