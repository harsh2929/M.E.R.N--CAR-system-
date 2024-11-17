# Car Management Application

A comprehensive web application for managing your car listings.  
## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Troubleshooting](#troubleshooting)
  - [Common Issues](#common-issues)
  - [Additional Tips](#additional-tips)

## Features

- **User Authentication:** Register and log in securely using JWT tokens.
- **Car Management:** Add, view, edit, and delete car listings.
- **Image Uploads:** Upload multiple images for each car with preview functionality.
- **Responsive Design:** Optimized for various devices using Material-UI.
- **Search Functionality:** Easily search through your car listings.
- **Global Notifications:** Receive instant feedback through snackbars for actions like adding or deleting cars.

## Tech Stack

### Frontend

- **React:** Frontend library for building user interfaces.
- **Redux:** State management library.
- **React Router:** Handling routing within the application.
- **Material-UI (MUI):** UI component library for styling and responsive design.
- **Formik & Yup:** Form handling and validation.
- **Axios:** HTTP client for API requests.

### Backend

- **Node.js & Express:** Backend runtime and framework.
- **MongoDB & Mongoose:** Database and ODM for data modeling.
- **JWT:** Authentication mechanism.
- **Multer:** Handling multipart/form-data for image uploads.
- **Cors:** Enabling Cross-Origin Resource Sharing.



## Installation

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js & npm:** Install [Node.js](https://nodejs.org/) (version 14 or higher) which includes npm.
- **MongoDB:** Set up a MongoDB database locally or use a cloud-based service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **Git:** Ensure Git is installed on your machine.

### Backend Setup

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/Car-Management-app.git
    cd Car-Management-app/backend
    ```

2. **Install Backend Dependencies:**

    ```bash
    npm install
    ```

3. **Configure Environment Variables:**

    Create a `.env` file in the `backend` directory with the following content:

    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

    - Replace `your_mongodb_connection_string` with your actual MongoDB connection URI.
    - Replace `your_jwt_secret_key` with a strong secret key for JWT authentication.

4. **Start the Backend Server:**

    ```bash
    npm start
    ```

    The backend server should now be running at `http://localhost:5000`.

### Frontend Setup

1. **Navigate to Frontend Directory:**

    ```bash
    cd ../frontend
    ```

2. **Install Frontend Dependencies:**

    ```bash
    npm install
    ```

3. **Configure Environment Variables:**

    Create a `.env` file in the `frontend` directory with the following content:

    ```env
    REACT_APP_API_BASE_URL=http://localhost:5000/api
    ```

    - Adjust the `REACT_APP_API_BASE_URL` if your backend is hosted elsewhere.

4. **Start the Frontend Development Server:**

    ```bash
    npm start
    ```

    The frontend application should now be running at `http://localhost:3000`.

---

**Note:**

- Ensure that both the backend and frontend servers are running simultaneously.
- If you encounter any issues during installation, refer to the troubleshooting section of the documentation.




## Project Structure


frontend/
├── src/
│   ├── components/
│   │   ├── Layout.js
│   │   ├── PrivateRoute.js
│   │   └── Notification.js
│   ├── pages/
│   │   ├── LoginPage.js
│   │   ├── RegisterPage.js
│   │   ├── CarListPage.js
│   │   ├── CarDetailPage.js
│   │   ├── CarCreatePage.js
│   │   └── CarEditPage.js
│   ├── store/
│   │   ├── actions/
│   │   │   ├── authActions.js
│   │   │   ├── carActions.js
│   │   │   └── notificationActions.js
│   │   ├── reducers/
│   │   │   ├── authReducer.js
│   │   │   ├── carReducer.js
│   │   │   └── notificationReducer.js
│   │   └── index.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   └── index.js
├── package.json
└── ... (other configuration files)
