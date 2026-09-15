# ⚙️ Contact Manager — Backend

The backend REST API for the **Contact Manager** application built with **Node.js, Express.js, MongoDB, and Mongoose**.

The API handles contact creation, retrieval, updating, deletion, validation, and database communication.

---

## 🌐 Deployment

### Backend — Render

[Contact Manager API](https://contact-manager-api-x1er.onrender.com/?utm_source=chatgpt.com)

### Frontend — Vercel

[Contact Manager Live Application](https://contact-manager-five-blond.vercel.app/?utm_source=chatgpt.com)

### GitHub Repository

[Contact Manager GitHub Repository](https://github.com/Mobin977/contact-manager?utm_source=chatgpt.com)

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
- ❌ Error handling
- 🔄 Persistent database storage

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
├── README.md
└── server.js
```

> `.env` contains sensitive environment variables and must never be committed to GitHub.

---

## 🏗️ Backend Architecture

```text
                    React Frontend
                          │
                          │ HTTP Requests
                          ▼
                  Express.js Routes
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

### Production Base URL

```text
https://contact-manager-api-x1er.onrender.com/api/contacts
```

### Local Base URL

```text
http://localhost:5000/api/contacts
```

---

### 1. Create Contact

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

Example response:

```json
{
  "message": "Contact created successfully",
  "contact": {
    "_id": "contact_id",
    "name": "Rahul Sharma",
    "email": "rahul.sharma@gmail.com",
    "phone": "9876543210",
    "address": "Tirupati, Andhra Pradesh",
    "category": "Personal"
  }
}
```

---

### 2. Get All Contacts

```http
GET /api/contacts
```

Returns all contacts sorted by newest first.

---

### 3. Get Single Contact

```http
GET /api/contacts/:id
```

Returns a single contact using its MongoDB document ID.

---

### 4. Update Contact

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

The API validates the updated contact and returns the updated document.

---

### 5. Delete Contact

```http
DELETE /api/contacts/:id
```

Deletes the selected contact from MongoDB.

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

### Field Details

| Field    | Type   | Required |
| -------- | ------ | -------- |
| name     | String | Yes      |
| email    | String | Yes      |
| phone    | String | Yes      |
| address  | String | No       |
| category | String | No       |

### Category Values

```text
Personal
Work
Family
Other
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Mobin977/contact-manager.git
```

### 2. Navigate to the Backend

```bash
cd contact-manager/backend
```

### 3. Install Dependencies

```bash
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Important

Never commit `.env` to GitHub.

Your `.gitignore` should contain:

```text
node_modules/
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

The local API will run on:

```text
http://localhost:5000
```

Test the root endpoint:

```text
http://localhost:5000/
```

Expected response:

```json
{
  "message": "Contact Manager API is running"
}
```

---

## ☁️ Render Deployment

The backend is deployed using Render.

### Render Configuration

```text
Root Directory:
backend

Build Command:
npm install

Start Command:
node server.js
```

### Environment Variables

```text
PORT=10000
MONGO_URI=your_mongodb_connection_string
```

The MongoDB connection string is stored securely as a Render environment variable.

---

## 🧪 API Testing

The backend CRUD operations have been tested successfully.

### CRUD

- ✅ POST — Create Contact
- ✅ GET — Get All Contacts
- ✅ GET — Get Single Contact
- ✅ PUT — Update Contact
- ✅ DELETE — Delete Contact

### Database

- ✅ MongoDB connection
- ✅ Contact persistence
- ✅ Data remains after frontend refresh

### Frontend Integration

- ✅ React connected to Express API
- ✅ Axios requests working
- ✅ Production API working
- ✅ Vercel frontend connected to Render backend

---

## 🔄 Request Flow

### Create Contact

```text
User
 ↓
React Form
 ↓
Axios POST Request
 ↓
Express Route
 ↓
Controller
 ↓
Mongoose
 ↓
MongoDB
 ↓
Response
 ↓
React UI
```

### Update Contact

```text
User clicks Edit
 ↓
Contact loaded into form
 ↓
User modifies data
 ↓
Axios PUT Request
 ↓
Express Route
 ↓
Controller
 ↓
MongoDB
 ↓
Updated Contact
 ↓
React UI
```

### Delete Contact

```text
User clicks Delete
 ↓
Confirmation
 ↓
Axios DELETE Request
 ↓
Express Route
 ↓
Controller
 ↓
MongoDB
 ↓
Contact deleted
 ↓
React UI updated
```

---

## 🎯 Learning Outcomes

This backend project demonstrates practical experience with:

- Express server setup
- REST API development
- MVC-style backend structure
- Express routing
- Controller architecture
- MongoDB integration
- Mongoose models
- Mongoose schema validation
- CRUD operations
- Request validation
- Error handling
- CORS configuration
- Environment variables
- Nodemon development workflow
- API deployment with Render
- Frontend-backend integration

---

## 🔮 Future Improvements

Potential improvements include:

- 🔐 JWT authentication
- 👥 User-specific contacts
- 🔒 Protected routes
- 🔎 Server-side search
- 📄 Pagination
- ⭐ Favorite contacts
- 📷 Contact profile images
- 📥 CSV import
- 📤 CSV export
- 🧪 Automated API tests
- 📊 API analytics
- 🛡️ Rate limiting
- 📝 API documentation with Swagger

---

## 🔗 Related Links

### Live Frontend

[Contact Manager — Vercel](https://contact-manager-five-blond.vercel.app/?utm_source=chatgpt.com)

### Live Backend

[Contact Manager API — Render](https://contact-manager-api-x1er.onrender.com/?utm_source=chatgpt.com)

### Source Code

[Contact Manager — GitHub](https://github.com/Mobin977/contact-manager?utm_source=chatgpt.com)

---

## 👨‍💻 Author

**Shaik Mobin**

GitHub: [Mobin977](https://github.com/Mobin977?utm_source=chatgpt.com)

LinkedIn: [Shaik Mobin on LinkedIn](https://www.linkedin.com/in/mobin-shaik-65900541/?
utm_source=chatgpt.com)

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project was created for learning and portfolio purposes.
