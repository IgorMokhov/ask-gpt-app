# Ask GPT App

## Introduction

Ask GPT App - fullstack application using the DeepSeek API.

Test task for the position of "Fullstack Developer" (ТОО KazInvestEngineering)

## Technologies

Client:
  - React.js
  - TypeScript
  - Tailwind
  - Lucide-react
  - Axios
  - Vite

Server:
  - Node.js
  - Express.js
  - Nodemon
  - Dotenv
  - OpenAi

## Getting Started

To install and use the project, follow these steps:

### Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in the terminal.
3. Obtain a DeepSeek API key and create a .env file in the /server directory:
```sh
 OPENAI_API_KEY=your_api_key
```
4. The server and client are located in separate directories — you need to install their dependencies individually:

```sh
cd server
npm install

cd client
npm install
```

<br/>

### Usage

To start the development server and cliend, use the following command:

```sh
cd server
npm run dev

cd client
npm run dev
```

Visit the provided local URL in your browser to explore the "Ask GPT App/client" application.

<br/>

### Build

For a production build, run the following command:

```sh
  npm run build
```
