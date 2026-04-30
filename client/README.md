# 🎓 Student CRUD Application

A full-stack **CRUD (Create, Read, Update, Delete)** application built using:

* ⚛️ React (Frontend)
* 🚀 Node.js + Express (Backend)
* 🛢️ MySQL (Database)

---

## 📌 Features

* ➕ Add new student
* 📋 View student list
* ✏️ Edit student details
* ❌ Delete student
* 🔄 Real-time updates

---

## 🛠️ Tech Stack

### Frontend

* React
* Axios
* React Router
* Bootstrap

### Backend

* Node.js
* Express.js
* MySQL (`mysql2`)

---

## 📁 Project Structure

```
project-root/
│
├── frontend/
│   ├── src/
│   │   ├── Home.jsx
│   │   ├── Create.jsx
│   │   ├── Edit.jsx
│   │   └── App.js
│
├── backend/
│   ├── controller/
│   │   └── crudcontroller.js
│   ├── routes/
│   │   └── crudroutes.js
│   ├── config/
│   │   └── db.js
│   └── server.js
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone the repository

```
git clone <your-repo-link>
cd project-root
```

---

### 🔹 2. Setup Backend

```
cd backend
npm install
```

#### ▶️ Start server

```
node server.js
```

Server runs on:

```
http://localhost:9000
```

---

### 🔹 3. Setup Frontend

```
cd frontend
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🗄️ Database Setup

### Create Database

```sql
CREATE DATABASE crud_operation;
USE crud_operation;
```

### Create Table

```sql
CREATE TABLE student (
  student_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  created_by timestamp default current_timestamp
);
```

---

## 🔌 API Endpoints

| Method | Endpoint             | Description        |
| ------ | -------------------- | ------------------ |
| GET    | `/list`              | Get all students   |
| GET    | `/student/:id`       | Get single student |
| POST   | `/addstudent`        | Add new student    |
| PUT    | `/updatestudent/:id` | Update student     |
| DELETE | `/deleteitem/:id`    | Delete student     |

---

## 🔄 Example API Usage

### Add Student

```json
POST /addstudent
{
  "name": "John",
  "email": "john@gmail.com"
}
```

---

### Update Student

```json
PUT /updatestudent/1
{
  "name": "Updated Name",
  "email": "updated@gmail.com"
}
```

---

## 🚀 Future Improvements

* 🔐 Authentication (JWT)
* 🔍 Search functionality
* 📄 Pagination
* 🎨 UI enhancements

---

## 👨‍💻 Author

Developed by **Your Name**

---

## ⭐ Conclusion

This project demonstrates a complete **CRUD workflow** using modern web technologies and is ideal for beginners learning full-stack development.

---
