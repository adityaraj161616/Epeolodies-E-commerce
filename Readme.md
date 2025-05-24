# Epeolodies

A full-stack e-commerce website built with a Node.js/Express backend and a modern frontend stack.

## Tech Stack

- **Backend:** Node.js, Express.js, MongoDB (via Mongoose)
- **Authentication:** Passport.js (Google & Facebook OAuth), JWT, express-session, bcryptjs
- **Frontend:** HTML, CSS (Tailwind CSS, PostCSS), JavaScript
- **Other:** dotenv, cors, nodemon (for development)

## Project Structure

```
.env
package.json
postcss.config.js
tailwind.config.js
public/
  admin-verif.html
  cart.html
  ...
  images/
  styles/
scripts/
  cart.js
server/
  app.js
  config.js
  controllers/
  middleware/
  models/
  routes/
  utils/
src/
  App.jsx
  index.css
  index.js
  components/
  pages/
```

## Getting Started

### 1. Clone the repository

```sh
git clone <repository-url>
cd Epeolodies
```

### 2. Install dependencies

```sh
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your configuration (MongoDB URI, session secrets, OAuth credentials, etc.).

### 4. Run the development server

```sh
npm run dev
```

This will start the backend server with `nodemon` for hot-reloading.

### 5. Access the website

- **Frontend:** Open `public/index.html` or other HTML files in your browser.
- **Backend API:** Runs on `http://localhost:3000` by default (see [server/app.js](server/app.js)).

## Available Scripts

- `npm run dev` — Start the backend server in development mode with hot-reloading.
- `npm start` — Start the backend server in production mode.
