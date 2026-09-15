# 📱 Contact Manager

A full-stack **Contact Management Application** built with **React, Node.js, Express, and MongoDB**.

The application allows users to create, view, edit, delete, search, and filter contacts through a clean and responsive interface.

---

## 🚀 Live Demo

### Frontend

Coming soon

### Backend API

Coming soon

---

## 📸 Screenshots

> Add your project screenshots here after deployment.

### Contact Manager Dashboard

![Contact Manager Dashboard](screenshots/dashboard.png)

### Add Contact

![Add Contact](screenshots/add-contact.png)

### Search & Filter

![Search and Filter](screenshots/search-filter.png)

### Edit Contact

![Edit Contact](screenshots/edit-contact.png)

---

## ✨ Features

- ➕ Add new contacts
- 👀 View all contacts
- ✏️ Edit existing contacts
- 🔄 Update contact information
- 🗑️ Delete contacts
- 🔍 Search contacts by:
  - Name
  - Email
  - Phone number

- 🏷️ Filter contacts by category
- 🔎 Combine search and category filters
- 🧹 Clear search and filters
- 👤 Contact avatar with name initial
- 📊 Dynamic contact count
- 📱 Responsive design
- 💾 MongoDB data persistence
- 🔗 REST API
- ⚡ Fast React frontend
- 🛡️ Backend validation

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript
- Vite
- Axios
- CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API
- CORS
- dotenv

### Development Tools

- VS Code
- Git
- GitHub
- Postman
- MongoDB

---

## 🏗️ Project Architecture

```text
React Frontend
      │
      │ Axios HTTP Requests
      ▼
Express.js REST API
      │
      │ Mongoose
      ▼
MongoDB Database
```

---

## 📂 Project Structure

```text
contact-manager/
│
├── frontend/
│   │
│   ├── public/
│   │
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   │
│   ├── controllers/
│   │   └── contactController.js
│   │
│   ├── models/
│   │   └── Contact.js
│   │
│   ├── routes/
│   │   └── contactRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 📋 Contact Data Model

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

### Categories

- Personal
- Work
- Family
- Other

---

## 🔌 REST API

Base URL:

```text
http://localhost:5000/api/contacts
```

### Create Contact

```http
POST /api/contacts
```

### Get All Contacts

```http
GET /api/contacts
```

### Get Single Contact

```http
GET /api/contacts/:id
```

### Update Contact

```http
PUT /api/contacts/:id
```

### Delete Contact

```http
DELETE /api/contacts/:id
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/contact-manager.git
```

### 2. Go to the Project

```bash
cd contact-manager
```

---

# 🔧 Backend Setup

### 3. Navigate to Backend

```bash
cd backend
```

### 4. Install Dependencies

```bash
npm install
```

### 5. Create `.env`

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

> Never upload your `.env` file or MongoDB credentials to GitHub.

### 6. Start Backend

Development mode:

```bash
npm run dev
```

Or:

```bash
node server.js
```

Backend will run on:

```text
http://localhost:5000
```

---

# 💻 Frontend Setup

Open another terminal.

### 7. Navigate to Frontend

```bash
cd frontend
```

### 8. Install Dependencies

```bash
npm install
```

### 9. Start React Application

```bash
npm run dev
```

The frontend will run on the Vite development URL shown in your terminal.

---

## 🧪 Testing

The following functionality has been tested:

### CRUD Operations

- ✅ Create contact
- ✅ Read contacts
- ✅ Update contact
- ✅ Delete contact

### Search

- ✅ Search by name
- ✅ Search by email
- ✅ Search by phone

### Filtering

- ✅ Personal
- ✅ Work
- ✅ Family
- ✅ Other
- ✅ Combined search + category filtering
- ✅ Clear filters

---

## 🎯 Learning Outcomes

This project helped demonstrate practical experience with:

- React state management
- React hooks
- Form handling
- Conditional rendering
- REST API integration
- Axios
- Express routing
- MVC-style backend structure
- MongoDB database operations
- Mongoose models
- CRUD operations
- Search and filtering
- Responsive CSS
- Environment variables
- Full-stack application architecture

---

## 🔮 Future Improvements

Possible future features:

- 🔐 User authentication
- 👥 Multiple user accounts
- ☁️ Cloud deployment
- 📷 Contact profile images
- 📥 Import contacts from CSV
- 📤 Export contacts to CSV
- ⭐ Favorite contacts
- 📑 Pagination
- 🌙 Dark mode
- 📧 Email integration
- 🔔 Contact reminders
- 📱 PWA support

---

## 👨‍💻 Author

**Shaik Mobin**

GitHub:
https://github.com/Mobin977

LinkedIn:
https://www.linkedin.com/in/mobin-shaik-65900541/

---

## ⭐ Support

If you found this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for learning and portfolio purposes.
