const express = require("express");

const {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

const router = express.Router();

// Create contact
router.post("/", createContact);

// Get all contacts
router.get("/", getContacts);

// Get single contact
router.get("/:id", getContact);

// Update contact
router.put("/:id", updateContact);

// Delete contact
router.delete("/:id", deleteContact);

module.exports = router;