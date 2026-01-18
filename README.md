# Bank Management System — Full Stack Project

This is a full-stack Bank Management System which allows users to create bank accounts, deposit money, withdraw money, check balance and view transaction history. It uses React for UI, Spring Boot for backend APIs and MySQL for database storage.

## Technologies Used
React (Vite), Material UI, Axios, JavaScript, Spring Boot, Java 17, Hibernate JPA, Maven, MySQL.

## Features
- Create a bank account
- Deposit and withdraw money
- Check account details
- View transaction history
- Real REST API communication
- Persistent storage using SQL DB

## Project Architecture
The system follows a simple full-stack architecture where the React frontend sends requests to Spring Boot backend using REST APIs and backend communicates with MySQL database as shown below:

React (Axios) → REST API → Spring Boot → MySQL Database

## How to Run
1. Clone the repository:
git clone https://github.com/ImAnshika9/BankManagementSystem.git

2. Set up MySQL database:
- Open MySQL and create: CREATE DATABASE bankdb;
- Open file: src/main/resources/application.properties
- Update your DB username & password

3. Run Backend:
- Open terminal and go to backend folder: cd BankManagementSystem/backend
- Run: mvn spring-boot:run
- Backend starts at: http://localhost:8080

4. Run Frontend:
- Open new terminal and go to frontend folder: cd BankManagementSystem/frontend
- Install dependencies: npm install
- Run: npm run dev
- Frontend opens at: http://localhost:5173

## Summary
This project demonstrates full-stack development, frontend-backend integration, REST API usage, state management, database operations and clean UI design suitable for college project, internship evaluation and interview demonstration.
