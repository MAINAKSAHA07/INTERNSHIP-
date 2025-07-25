# THELANGUAGENETWORK.CO Project

This repository contains the full-stack codebase for THELANGUAGENETWORK.CO, including both the frontend (React) and backend (Node.js/Express + Firebase Functions) components.

---

## Folder Structure

- `website/` — React frontend (main user-facing website)
- `Backend/` — Node.js/Express backend and Firebase Cloud Functions

---

## Setup Instructions

### Frontend (`website/`)

1. Navigate to the website folder:
   ```sh
   cd website
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

### Backend (`Backend/`)

1. Navigate to the Backend folder:
   ```sh
   cd Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   npm start
   ```
   The backend will run at [http://localhost:8080](http://localhost:8080).

#### Firebase Functions

- Navigate to `Backend/functions/` and follow Firebase CLI instructions to deploy or emulate functions.

---

## Security & Code Quality Audit (2024)

### Key Findings
- **Sensitive Data:** MongoDB credentials and tokens are hardcoded in source files. **Move all secrets to environment variables (e.g., using `.env` files and `dotenv`).**
- **Frontend:** No ESLint/Prettier config detected. Add these for consistent code style.
- **Backend:** ESLint is present but with relaxed rules. Consider enforcing stricter linting.
- **Potential XSS:** Usage of `dangerouslySetInnerHTML` and `.innerHTML` in frontend. Always sanitize user content (DOMPurify is used, but review all usages).
- **Dependencies:** Large number of dependencies; some may be unused. Run `depcheck` or similar tools to prune unused packages.
- **Error Handling:** Some API calls lack robust error handling.

### Recommendations
- **Environment Variables:** Store all secrets (DB URIs, API keys, tokens) in environment variables.
- **Add Linting:** Add ESLint and Prettier to the frontend. Enforce code style in both frontend and backend.
- **Audit Dependencies:** Regularly run `npm audit` and `depcheck` to find vulnerabilities and unused packages.
- **Sanitize HTML:** Continue using DOMPurify and review all dynamic HTML rendering for security.
- **Remove Dead Code:** Clean up commented-out and duplicate code.

---

## Scripts & Usage

### Frontend (`website/`)
- `npm start` — Start development server
- `npm test` — Run tests
- `npm run build` — Build for production
- `npm run eject` — Eject configuration (irreversible)

### Backend (`Backend/`)
- `npm start` — Start backend server (with nodemon)

### Firebase Functions (`Backend/functions/`)
- `npm run lint` — Lint functions code
- `npm run serve` — Emulate functions locally
- `npm run deploy` — Deploy functions to Firebase

---

## Contribution & Best Practices
- **Never commit secrets or credentials.**
- Use environment variables for all sensitive data.
- Add and enforce ESLint/Prettier for code consistency.
- Write robust error handling for all API calls.
- Regularly audit dependencies and code for security and quality.

---

## Frontend (website/) — Create React App Info

_The following is the default Create React App documentation for the frontend:_

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

