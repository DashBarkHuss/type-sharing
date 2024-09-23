# type-sharing

# TypeScript Compilation and Development Workflow

This project is structured into three main parts: `shared`, `frontend`, and `backend`. Each part has its own approach to handling TypeScript, depending on its role in the application.

## 1. Shared

The `shared` directory contains shared types and interfaces used by both the frontend and backend.

### Development
- **Transpilation**: During development, you typically do not run the TypeScript compiler (`tsc`) directly. Instead, you can make changes to the TypeScript files in the `src` directory.
  
### Production
- **Compilation**: Before using the shared library in the frontend or backend, you need to compile it to JavaScript. To do this, navigate to the `shared` directory and run:
  ```bash
  npm run build
  ```
- This command will compile the TypeScript files in the `src` directory and output the compiled files to the `dist` directory, along with the corresponding `.d.ts` declaration files.

## 2. Backend

The `backend` directory contains the server-side application.

### Development
- **Transpilation**: For development, you can run the backend using `ts-node`, which allows you to execute TypeScript files directly without compiling them first. To start the backend in development mode, run:
  ```bash
  npm run dev
  ```
- This command will use `ts-node` to run the `src/index.ts` file, allowing for quick iterations and immediate feedback.

### Production
- **Compilation**: Before deploying the backend, you should compile the TypeScript files to JavaScript. To do this, run:
  ```bash
  npm run build
  ```
- After building, you can start the compiled application using:
  ```bash
  npm start
  ```
- This will run the compiled JavaScript files located in the `dist` directory.

## 3. Frontend

The `frontend` directory contains the client-side application built with React.

### Development
- **Transpilation**: In development mode, you can run the frontend using:
  ```bash
  npm start
  ```
- This command starts the development server using Create React App (CRA), which handles TypeScript compilation internally. Changes to TypeScript files are reflected immediately in the browser without needing to run a separate build command.

### Production
- **Compilation**: When you are ready to deploy the frontend application, run:
  ```bash
  npm run build
  ```
- This command compiles the TypeScript files and bundles the application for production, outputting the static files to the `build` directory.

## Summary

- **Shared**: Compile with `npm run build` before using in other parts.
- **Backend**: Use `ts-node` for development (`npm run dev`), compile with `npm run build` for production, and run with `npm start`.
- **Frontend**: Use `npm start` for development (CRA handles TypeScript), and compile with `npm run build` for production.

This workflow allows for efficient development and deployment of TypeScript applications across different parts of the project.
