const Contact = require("../models/Contact");

// Create Contact
const createContact = async (req, res) => {
  try {
    const { name, email, phone, address, category } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Name, email and phone are required",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      address,
      category,
    });

    res.status(201).json({
      message: "Contact created successfully",
      contact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create contact",
      error: error.message,
    });
  }
};

// Get All Contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch contacts",
      error: error.message,
    });
  }
};

// Get Single Contact
const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch contact",
      error: error.message,
    });
  }
};

// Update Contact
const updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.status(200).json({
      message: "Contact updated successfully",
      contact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update contact",
      error: error.message,
    });
  }
};

// Delete Contact
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.status(200).json({
      message: "Contact deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete contact",
      error: error.message,
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
};