# CRUD Teachers & Assistant Teachers Backend

##  Project Overview

This project is a backend system that provides functionality for managing teachers and assistant teachers using **Node.js**, **Express**, and **MySQL**. The system supports **CRUD (Create, Read, Update, Delete)** operations for both teachers and assistant teachers, along with the necessary database interactions.

##  Setup Instructions

To begin, clone the repository to your local machine using Git:

```sh
x Clone the Repository

git clone https://github.com/sleman-qtawe/CRUD_Teachers.git
cd CRUD_Teachers/backend


 Install Dependencies

npm install

 Create a .env File

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=teachers_db
PORT=5000

 Set Up the MySQL Database

CREATE DATABASE teachers_db;
USE teachers_db;

CREATE TABLE teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    identity_number VARCHAR(20) UNIQUE NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    specialties JSON NOT NULL,
    has_assistants BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE assistant_teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    identity_number VARCHAR(20) UNIQUE NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    specialties JSON NOT NULL,
    supervisor_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (supervisor_id) REFERENCES teachers(id) ON DELETE CASCADE
);

 Start the Server
npm start
or  
npm run dev 



