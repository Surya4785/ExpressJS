# 🚀 ExpressJS Beginner Server

A **simple Express.js server project** built with Node.js to demonstrate the basics of backend development including **middleware, routing, and server setup**.

---

## 📌 Project Overview

This project demonstrates how to create a **basic backend server using Express.js**.
It is ideal for beginners who want to understand how a **Node.js server handles requests and responses**.

✨ Features included:

* Express server setup
* Middleware usage
* Multiple routes
* Localhost server running on **port 3000**

---

## 🛠️ Tech Stack

| Technology       | Purpose              |
| ---------------- | -------------------- |
| Node.js          | Runtime environment  |
| Express.js       | Backend framework    |
| JavaScript (ES6) | Programming language |

---

## 📂 Project Structure

```
ExpressJS
│
├── index.js        # Main server file
├── package.json    # Project dependencies
└── README.md       # Documentation
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Surya4785/ExpressJS.git
```

### 2️⃣ Navigate into the project folder

```bash
cd ExpressJS
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run the server

```bash
node index.js
```

---

## 🌐 Server Running

Once started, the server runs on:

```
http://localhost:3000
```

---

## 📡 Available Routes

### 🏠 Home Route

```
GET /
```

Response

```
Hello World
```

---

### 👤 Profile Route

```
GET /profile
```

Response

```
Hello from my profile
```

---

## 💻 Example Code

```javascript
import express from 'express'

const app = express()

// Middleware
app.use((req, res, next) => {
  next()
})

// Routes
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/profile', (req, res) => {
  res.send('Hello from my profile')
})

// Server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000')
})
```

---

## 🎯 Learning Goals

This project helps you learn:

* How Express.js works
* How to create routes
* How middleware works
* How to start a backend server

---

## 👨‍💻 Author

**Surya Prakash Yadav**

🌐 GitHub:
https://github.com/Surya4785

🎓 Student at **ABES Engineering College**

---

## ⭐ Support

If you found this project useful, please consider **starring the repository ⭐**