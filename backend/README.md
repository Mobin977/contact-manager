# ⚙️ Contact Manager — Backend

The backend REST API for the **Contact Manager** application built with **Node.js, Express.js, MongoDB, and Mongoose**.

The API handles contact creation, retrieval, updating, deletion, and database communication.

---

## 🚀 Features

- ➕ Create contacts
- 👀 Get all contacts
- 🔎 Get a single contact
- ✏️ Update contacts
- 🗑️ Delete contacts
- 🗄️ MongoDB database integration
- 📋 Mongoose schema validation
- 🔗 RESTful API architecture
- 🌐 CORS support
- 🔐 Environment variables with dotenv
- ⚡ Nodemon development server

---

## 🛠️ Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript
- CORS
- dotenv
- Nodemon

---

## 📂 Project Structure

```text
backend/
│
├── controllers/
│   └── contactController.js
│
├── models/
│   └── Contact.js
│
├── routes/
│   └── contactRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

---

## 🏗️ Backend Architecture

```text
Client / React
      │
      ▼
Express Routes
      │
      ▼
Controllers
      │
      ▼
Mongoose Model
      │
      ▼
MongoDB
```

---

## 🔌 API Endpoints

Base URL:

```text
http://localhost:5000/api/contacts
```

### Create Contact

```http
POST /api/contacts
```

Example request:

```json
{
  "name": "Rahul Sharma",
  "email": "rahul.sharma@gmail.com",
  "phone": "9876543210",
  "address": "Tirupati, Andhra Pradesh",
  "category": "Personal"
}
```

---

### Get All Contacts

```http
GET /api/contacts
```

---

### Get Single Contact

```http
GET /api/contacts/:id
```

---

### Update Contact

```http
PUT /api/contacts/:id
```

Example request:

```json
{
  "name": "Rahul Sharma",
  "email": "rahul.sharma@gmail.com",
  "phone": "9876543210",
  "address": "Hyderabad, Telangana",
  "category": "Work"
}
```

---

### Delete Contact

```http
DELETE /api/contacts/:id
```

---

## 📋 Contact Schema

Each contact contains:

```text
name
email
phone
address
category
createdAt
updatedAt
```

### Category Values

```text
Personal
Work
Family
Other
```

---

## ⚙️ Installation

### 1. Navigate to Backend

```bash
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

⚠️ **Never commit `.env` to GitHub.**

Make sure `.gitignore` contains:

```text
node_modules
.env
```

---

## ▶️ Run the Server

### Development

```bash
npm run dev
```

### Production

```bash
node server.js
```

The API runs locally on:

```text
http://localhost:5000
```

---

## 🧪 API Testing

The backend CRUD operations have been tested successfully:

- ✅ POST — Create Contact
- ✅ GET — Get All Contacts
- ✅ GET — Get Single Contact
- ✅ PUT — Update Contact
- ✅ DELETE — Delete Contact

The API was tested with the React frontend and MongoDB.

---

## 🎯 Learning Outcomes

This backend project demonstrates:

- Express server setup
- REST API development
- MVC-style structure
- Express routing
- Controller architecture
- MongoDB integration
- Mongoose schemas
- CRUD operations
- Request validation
- Error handling
- CORS configuration
- Environment variables
- Nodemon development workflow

---

## 🔮 Future Improvements

- 🔐 JWT authentication
- 👥 User-specific contacts
- 🔎 Server-side search
- 📄 Pagination
- ⭐ Favorite contacts
- 📷 Contact images
- 📥 CSV import
- 📤 CSV export
- 🔒 Protected routes
- 🧪 Automated API tests

---

## 👨‍💻 Author

**Shaik Mobin**

GitHub:
https://github.com/Mobin977

LinkedIn:
https://www.linkedin.com/in/mobin-shaik-65900541/

---

## 📄 License

This project is created for learning and portfolio purposes.
