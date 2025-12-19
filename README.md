# TaskManager

A task management application built with React and TypeScript to help you organize and track your tasks efficiently.

## Features

-  Create, edit, and delete tasks
-  Organize tasks by categories or projects
-  Set priorities and due dates
-  Mark tasks as complete
-  Search and filter tasks

## Tech Stack

-  **React 18** - UI library
-  **TypeScript** - Type safety
-  **Vite** - Build tool and dev server

## Prerequisites

-  Node.js (version 16 or higher)
-  npm or yarn

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/TaskManager.git

# Navigate to the project directory
cd TaskManager

# Install dependencies
npm install
```

## Usage

### Development

```bash
# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
```

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
TaskManager/
├── public/              # Static assets
├── src/
│   ├── App.tsx          # Main App component
│   ├── App.css          # App styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tsconfig.node.json   # TypeScript config for Node
├── vite.config.ts       # Vite configuration
├── .eslintrc.cjs        # ESLint configuration
├── .gitignore           # Git ignore rules
└── README.md            # This file
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
