# Alumin Portal

Welcome to the **Alumin Portal** project! This is a **MERN stack** application, designed to provide an easy-to-use platform for alumni management. The application is built with **MongoDB**, **Express.js**, **React**, and **Node.js**. It is highly responsive and capable of handling large databases, making it suitable for real-world applications.

## Features

- **Responsive Design**: The application is fully responsive and works seamlessly on desktop, tablet, and mobile devices.
- **MongoDB**: Built with MongoDB, the application can handle large amounts of data efficiently.
- **Authentication**: Includes a secure authentication system using JSON Web Tokens (JWT) for user login and registration.
- **Profile Photos**: User profile photos are stored in the `uploads` folder.
- **Minimal Formal Design**: The interface is designed with a minimal, formal layout to keep things clean and user-friendly.
- **Toast Notifications**: Toast messages are displayed whenever required for user interaction and feedback.
- **Event Section**: The platform includes an events section where photos, descriptions, and event links for enrollment can be viewed and clicked.
- **Alumni Management**: The platform allows alumni to be shown by graduation year, department filters, and has a search functionality.

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (for backend)
- **MongoDB** (either a local instance or access to MongoDB Atlas)
- **JWT Secret Key** (for secure authentication)

## Environment Variables

The project requires several environment variables to be configured. These variables are used to connect to the database, manage authentication, and configure API endpoints.

### `.env` file

Create a `.env` file in the root of your project and add the following variables:

```bash
PORT=5000
MONGO_URI=mongodb+srv://yourdbusername:yourdbpassword@cluster0.steuj.mongodb.net/Alumin-Portal
JWT_SECRET=mySuperSecretKey1234
BASE_URL=http://localhost:5000/api
VITE_API_BASE_URL=http://localhost:5000/api
VITE_BASE_URL=http://localhost:5000/api
