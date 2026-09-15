# 📱 Contact Manager — Frontend

A responsive **React frontend** for a full-stack Contact Manager application.

The frontend allows users to create, view, edit, update, delete, search, and filter contacts through a REST API built with Node.js and Express.

---

## 🌐 Live Application

**Frontend — Vercel**

[Contact Manager Live App](https://contact-manager-five-blond.vercel.app/?utm_source=chatgpt.com)

**Backend API — Render**

[Contact Manager API](https://contact-manager-api-x1er.onrender.com/?utm_source=chatgpt.com)

**GitHub Repository**

[Contact Manager on GitHub](https://github.com/Mobin977/contact-manager?utm_source=chatgpt.com)

---

## ✨ Features

- ➕ Add new contacts
- 👀 View all contacts
- ✏️ Edit contacts
- 🔄 Update contact information
- 🗑️ Delete contacts
- 🔍 Search by name
- 📧 Search by email
- 📱 Search by phone number
- 🏷️ Filter by category
- 🔎 Combined search and category filtering
- 🧹 Clear search and filters
- 👤 Contact avatar with name initial
- 📊 Dynamic contact count
- 📱 Responsive design
- 🔗 REST API integration
- ⚡ Fast Vite development environment

---

## 🛠️ Tech Stack

### Frontend

- React
- JavaScript
- Vite
- Axios
- HTML5
- CSS3

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API

---

## 🏗️ Application Architecture

```text
┌─────────────────────────────┐
│       React Frontend        │
│         Vite + CSS          │
└──────────────┬──────────────┘
               │
               │ Axios
               │ HTTP Requests
               ▼
┌─────────────────────────────┐
│       Express Backend       │
│        REST API             │
└──────────────┬──────────────┘
               │
               │ Mongoose
               ▼
┌─────────────────────────────┐
│          MongoDB            │
│        Contact Data         │
└─────────────────────────────┘
```

---

## 📂 Project Structure

```text
frontend/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🔗 Backend API

The frontend communicates with the deployed Express backend using Axios.

### Production API

```text
https://contact-manager-api-x1er.onrender.com/api/contacts
```

### API Operations

```text
POST    /api/contacts
GET     /api/contacts
GET     /api/contacts/:id
PUT     /api/contacts/:id
DELETE  /api/contacts/:id
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Mobin977/contact-manager.git
```

### 2. Navigate to the Frontend

```bash
cd contact-manager/frontend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start Development Server

```bash
npm run dev
```

Vite will provide a local development URL in the terminal.

---

## 🧪 Testing

The frontend has been tested with the deployed backend.

### Contact Management

- ✅ Add contact
- ✅ Display contacts
- ✅ Edit contact
- ✅ Update contact
- ✅ Delete contact

### Search

- ✅ Search by name
- ✅ Search by email
- ✅ Search by phone number

### Filtering

- ✅ Personal category
- ✅ Work category
- ✅ Family category
- ✅ Other category
- ✅ Combined search + category filter
- ✅ Clear filters

### Persistence

- ✅ Contacts persist after browser refresh
- ✅ Data is stored in MongoDB through the backend API

---

## 🎯 React Concepts Used

This project demonstrates practical usage of:

- React functional components
- `useState`
- `useEffect`
- Controlled form inputs
- Event handling
- Conditional rendering
- Array mapping
- Array filtering
- State updates
- API requests with Axios
- CRUD operations
- Responsive CSS

---

## 🔄 User Flow

```text
User opens application
        ↓
React loads contacts
        ↓
Axios requests backend API
        ↓
Express API
        ↓
MongoDB
        ↓
Contacts returned to React
        ↓
Contacts displayed
```

### Adding a Contact

```text
User fills form
      ↓
React state
      ↓
POST request
      ↓
Express API
      ↓
MongoDB
      ↓
New contact returned
      ↓
UI updated
```

### Editing a Contact

```text
Click Edit
    ↓
Contact data loaded into form
    ↓
User modifies information
    ↓
PUT request
    ↓
MongoDB updated
    ↓
Updated contact displayed
```

### Deleting a Contact

```text
Click Delete
     ↓
Confirmation
     ↓
DELETE request
     ↓
MongoDB
     ↓
Contact removed
     ↓
UI updated
```

---

## 📱 Responsive Design

The application is designed to work across:

- 💻 Desktop
- 💻 Laptop
- 📱 Tablet
- 📱 Mobile

The contact grid automatically adjusts based on screen size.

---

## 🚀 Deployment

### Frontend

The React application is deployed using Vercel.

[Open Live Frontend](https://contact-manager-five-blond.vercel.app/?utm_source=chatgpt.com)

### Backend

The Express API is deployed using Render.

[Open Backend API](https://contact-manager-api-x1er.onrender.com/?utm_source=chatgpt.com)

---

## 🔐 Security

Sensitive environment variables are not stored in the frontend repository.

The backend MongoDB connection string is stored securely in the backend environment variables and is **not committed to GitHub**.

---

## 🔮 Future Improvements

Potential improvements include:

- 🔐 User authentication
- 👥 User-specific contacts
- ⭐ Favorite contacts
- 📷 Contact profile images
- 📥 Import contacts from CSV
- 📤 Export contacts to CSV
- 📄 Pagination
- 🌙 Dark mode
- 📧 Email integration
- 🔔 Contact reminders
- 📱 Progressive Web App support

---

## 👨‍💻 Author

**Shaik Mobin**

GitHub: [Mobin977](https://github.com/Mobin977?utm_source=chatgpt.com)

LinkedIn: [Shaik Mobin on LinkedIn](https://www.linkedin.com/in/mobin-shaik-65900541/?utm_source=chatgpt.com)

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project was created for learning and portfolio purposes.
