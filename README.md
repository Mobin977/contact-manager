# 📱 Contact Manager

A full-stack **Contact Manager** application built with **React, Node.js, Express, and MongoDB**.

The application allows users to create, view, search, filter, edit, and delete contacts through a clean and responsive interface.

---

## 🚀 Live Demo

### 🌐 Frontend

[Contact Manager Live App](https://contact-manager-five-blond.vercel.app/?utm_source=chatgpt.com)

### ⚙️ Backend API

[Contact Manager API](https://contact-manager-api-x1er.onrender.com/?utm_source=chatgpt.com)

### 💻 GitHub Repository

[Contact Manager GitHub Repository](https://github.com/Mobin977/contact-manager?utm_source=chatgpt.com)

---

## ✨ Features

- ➕ Add new contacts
- 👤 Display contacts
- ✏️ Edit existing contacts
- 🗑️ Delete contacts
- 🔍 Search contacts
- 🏷️ Filter contacts by category
- 🔎 Combine search and category filtering
- 🧹 Clear search and filters
- 📊 Display total contact count
- 👤 Automatic avatar initials
- 📱 Responsive design
- 💾 MongoDB data persistence
- 🔄 REST API integration
- ⚡ React-based frontend
- 🌐 Deployed frontend and backend

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

### Deployment

- Vercel — Frontend
- Render — Backend
- MongoDB — Database

---

## 🏗️ Application Architecture

```text
                    ┌──────────────────────┐
                    │      React App       │
                    │      Frontend        │
                    │       Vercel         │
                    └──────────┬───────────┘
                               │
                               │ HTTP Requests
                               │ Axios
                               ▼
                    ┌──────────────────────┐
                    │    Express Server    │
                    │       Node.js        │
                    │       Render         │
                    └──────────┬───────────┘
                               │
                               │ Mongoose
                               ▼
                    ┌──────────────────────┐
                    │       MongoDB        │
                    │      Database        │
                    └──────────────────────┘
```

---

## 📂 Project Structure

```text
contact-manager/
│
├── README.md
├── .gitignore
│
├── frontend/
│   ├── README.md
│   ├── package.json
│   ├── index.html
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── main.jsx
│       └── index.css
│
└── backend/
    ├── README.md
    ├── package.json
    ├── server.js
    ├── .env
    │
    ├── models/
    │   └── Contact.js
    │
    ├── controllers/
    │   └── contactController.js
    │
    └── routes/
        └── contactRoutes.js
```

---

## 🔥 Core Functionality

### 1. Create Contact

Users can create a contact with:

- Name
- Email
- Phone
- Address
- Category

Supported categories:

```text
Personal
Work
Family
Other
```

---

### 2. View Contacts

All contacts are retrieved from the backend API and displayed in the React application.

Contacts are sorted by creation date, with the newest contacts displayed first.

---

### 3. Edit Contact

Users can select a contact and update its information.

The frontend sends a `PUT` request to the backend API.

---

### 4. Delete Contact

Users can delete contacts directly from the interface.

The frontend sends a `DELETE` request to the backend.

---

### 5. Search

Contacts can be searched by:

- Name
- Email
- Phone number

Example:

```text
Search: Rahul
```

The application displays matching contacts immediately.

---

### 6. Category Filter

Users can filter contacts by:

```text
All Categories
Personal
Work
Family
Other
```

---

### 7. Combined Filtering

Search and category filtering work together.

For example:

```text
Search: Rahul
Category: Personal
```

Only matching personal contacts are displayed.

---

## 🔌 REST API

### Base URL

Production:

```text
https://contact-manager-api-x1er.onrender.com/api/contacts
```

Local:

```text
http://localhost:5000/api/contacts
```

### Endpoints

| Method | Endpoint            | Description        |
| ------ | ------------------- | ------------------ |
| POST   | `/api/contacts`     | Create contact     |
| GET    | `/api/contacts`     | Get all contacts   |
| GET    | `/api/contacts/:id` | Get single contact |
| PUT    | `/api/contacts/:id` | Update contact     |
| DELETE | `/api/contacts/:id` | Delete contact     |

---

## 📦 Example Contact

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

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/Mobin977/contact-manager.git
```

Move into the project:

```bash
cd contact-manager
```

---

## 🖥️ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs locally at:

```text
http://localhost:5173
```

---

## ⚙️ Backend Setup

Open another terminal:

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm run dev
```

Or:

```bash
node server.js
```

Backend runs locally at:

```text
http://localhost:5000
```

---

## 🔐 Environment Variables

The backend requires:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

> Never commit `.env` files or database credentials to GitHub.

The `.gitignore` file excludes environment variables and dependencies.

---

## 🧪 Testing

The following CRUD operations were tested successfully:

### Create

```text
POST /api/contacts
```

### Read

```text
GET /api/contacts
GET /api/contacts/:id
```

### Update

```text
PUT /api/contacts/:id
```

### Delete

```text
DELETE /api/contacts/:id
```

Frontend functionality tested:

- Add contact
- Edit contact
- Update contact
- Delete contact
- Search
- Category filter
- Search + category filter
- Clear filter
- Refresh persistence

---

## 📱 Responsive Design

The application is designed to work across:

- 💻 Desktop
- 📱 Mobile
- 📲 Tablet

The contact grid automatically adjusts based on screen size.

---

## 🔄 User Flow

```text
Open Application
       ↓
Load Contacts
       ↓
Display Contact List
       ↓
 ┌─────┼─────────┐
 ↓     ↓         ↓
Add   Search    Filter
 ↓     ↓         ↓
Create Results  Category
       ↓         ↓
       └────┬────┘
            ↓
       Select Contact
            ↓
      Edit / Delete
            ↓
        Update UI
```

---

## 🧠 What I Learned

This project helped me practice:

- React components
- React state management
- React hooks
- Controlled forms
- Axios API requests
- REST API development
- Express routing
- Express controllers
- MongoDB
- Mongoose schemas
- CRUD operations
- CORS
- Environment variables
- Error handling
- Search functionality
- Filtering
- Responsive CSS
- Git and GitHub
- Vercel deployment
- Render deployment

---

## 🚀 Future Improvements

Possible future features:

- 🔐 User authentication
- 👥 Multiple user accounts
- ⭐ Favorite contacts
- 📸 Contact profile images
- 📥 Import contacts
- 📤 Export contacts
- 📊 Contact analytics
- 🌙 Dark mode
- 🔔 Notifications
- 📄 Pagination
- 🔎 Advanced search
- 📱 PWA support

---

## 📸 Screenshots

Screenshots can be added here:

```text
screenshots/
├── dashboard.png
├── add-contact.png
├── search.png
└── edit-contact.png
```

---

## 📌 Project Highlights

This project demonstrates a complete full-stack workflow:

```text
React
  ↓
Axios
  ↓
Express REST API
  ↓
Mongoose
  ↓
MongoDB
```

It also demonstrates deployment of a separate frontend and backend application.

---

## 👨‍💻 Author

**Shaik Mobin**

### GitHub

[Mobin977 GitHub](https://github.com/Mobin977?utm_source=chatgpt.com)

---

## 📄 License

This project is available for educational and portfolio purposes.

---

⭐ If you found this project useful, consider giving the repository a star!
