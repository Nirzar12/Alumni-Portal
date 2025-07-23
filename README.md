# Alumin Portal: Alumni Network Platform


![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?logo=node.dot.js)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?logo=mongodb)

A modern, responsive **MERN stack** application designed for seamless alumni network management. This platform provides a centralized, easy-to-use hub for educational institutions and organizations to engage with their alumni.

## Table of Contents

- [About The Project](#about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)

- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Environment Configuration](#-environment-configuration)
- [Project Structure](#-project-structure)


## About The Project

The **Alumin Portal** is a full-stack web application built to connect, engage, and manage an alumni community effectively. It addresses the need for a scalable and intuitive platform where former students can network, stay informed about events, and maintain their connection with their alma mater. With a clean, formal design and a robust backend, it is ready for real-world deployment.

## ✨ Key Features

-   **Fully Responsive UI**: A seamless experience across desktops, tablets, and mobile devices.
-   **Scalable Database**: Built with **MongoDB** to efficiently handle large volumes of alumni data.
-   **Secure Authentication**: Features a secure user registration and login system using **JSON Web Tokens (JWT)**.
-   **Dynamic Alumni Directory**: Search for alumni, and filter the directory by graduation year or department.
-   **Events Section**: An interactive section to showcase upcoming events with descriptions, photos, and registration links.
-   **User-Friendly Interface**: A minimal and formal design ensures easy navigation and a professional user experience.
-   **Instant Feedback**: Integrated **Toast Notifications** provide clear and immediate feedback for user actions.

## 🛠️ Tech Stack

This project is built with the MERN stack and other modern technologies.

-   **Frontend**:
    -   [React.js](https://reactjs.org/)
    -   [React Router](https://reactrouter.com/)
    -   [Axios](https://axios-http.com/)
    -   [Tailwind CSS](https://tailwindcss.com/) (or your chosen CSS framework)
-   **Backend**:
    -   [Node.js](https://nodejs.org/)
    -   [Express.js](https://expressjs.com/)
    -   [Mongoose](https://mongoosejs.com/)
-   **Database**:
    -   [MongoDB](https://www.mongodb.com/) (local or via Atlas)
-   **Authentication**:
    -   [JSON Web Token (JWT)](https://jwt.io/)
    -   [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)

## 🚀 Getting Started

Follow these steps to get a local copy of the project up and running.

### Prerequisites

Ensure you have the following software installed on your machine:

-   **Node.js**: [Download & Install Node.js](https://nodejs.org/en/download/) (v16 or higher recommended)
-   **npm** or **yarn**: Included with Node.js.
-   **MongoDB**: Set up a local MongoDB server or create a free cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Installation

1.  **Clone the Repository**
    ```sh
    git clone [https://github.com/your-username/alumin-portal.git](https://github.com/your-username/alumin-portal.git)
    cd alumin-portal
    ```

2.  **Install Backend Dependencies**
    Navigate to the server directory and install the required packages.
    ```sh
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies**
    Navigate to the client directory and install the required packages.
    ```sh
    cd ../frontend
    npm install
    npm run dev
    ```

4.  **Set Up Environment Variables**
    Create a `.env` file in the root directory. See the [Environment Configuration](#-environment-configuration) section below for details.

5.  **Run the Application**
    -   **Start the Backend Server**: From the root directory:
        ```sh
        npm run dev
        ```
    -   **Start the Frontend Development Server**: From the `/frontend` directory:
        ```sh
        npm run dev
        ```

The application should now be running!
-   Frontend: `http://localhost:5173` (or your configured Vite port)
-   Backend API: `http://localhost:5000`

## ⚙️ Environment Configuration

For the application to function correctly, you must configure the environment variables.

Create a `.env` file in the **root of the `server` folder** and add the following variables. It's recommended to use the `.env.example` as a template.

```ini
# .env

# Server Configuration
PORT=5000

# MongoDB Connection String
# Replace with your actual MongoDB connection URI from MongoDB Atlas or your local instance
MONGO_URI=mongodb+srv://<username>:<password>@your-cluster.mongodb.net/your-database-name

# JWT Configuration
# Use a long, complex, and random string for security
JWT_SECRET=yourSuperSecretKeyForAuthentication

# Base URL for the API (optional, for constructing URLs)
BASE_URL=http://localhost:5000

# client/.env.local

# The base URL of your backend API
VITE_API_BASE_URL=http://localhost:5000/api

```
## 📂 Project Structure
```

alumin-portal/
├── frontend/              # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── context/
│   │   ├── routes/
│   │   ├── pages/
│   │   └── App.jsx
│   |── package.json
|   |── index.html
│
├── backend/              # Node.js & Express Backend
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── uploads/         # Stores user profile photos
│   ├── .env            # Environment variables
│   └── index.js        # Main server entry point
│
└── README.md

```
