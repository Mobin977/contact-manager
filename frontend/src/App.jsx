import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API_URL ="https://contact-manager-api-x1er.onrender.com/api/contacts";

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);

  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    category: "Personal",
  });

  const fetchContacts = async () => {
    try {
      const response = await axios.get(API_URL);
      setContacts(response.data);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      category: "Personal",
    });

    setEditingId(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (editingId) {
        const response = await axios.put(
          `${API_URL}/${editingId}`,
          formData
        );

        setContacts(
          contacts.map((contact) =>
            contact._id === editingId
              ? response.data.contact
              : contact
          )
        );

        alert("Contact updated successfully!");
      } else {
        const response = await axios.post(API_URL, formData);

        setContacts([
          response.data.contact,
          ...contacts,
        ]);

        alert("Contact added successfully!");
      }

      resetForm();
    } catch (error) {
      console.error("Operation failed:", error);

      alert(
        error.response?.data?.message ||
          "Something went wrong"
      );
    }
  };

  const handleEdit = (contact) => {
    setEditingId(contact._id);

    setFormData({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      address: contact.address || "",
      category: contact.category,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this contact?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await axios.delete(`${API_URL}/${id}`);

      setContacts(
        contacts.filter(
          (contact) => contact._id !== id
        )
      );

      if (editingId === id) {
        resetForm();
      }

      alert("Contact deleted successfully!");
    } catch (error) {
      console.error("Failed to delete contact:", error);

      alert(
        error.response?.data?.message ||
          "Failed to delete contact"
      );
    }
  };

  // SEARCH + FILTER
  const filteredContacts = contacts.filter((contact) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      contact.name.toLowerCase().includes(searchText) ||
      contact.email.toLowerCase().includes(searchText) ||
      contact.phone.toLowerCase().includes(searchText);

    const matchesCategory =
      filterCategory === "All" ||
      contact.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <h1>Contact Manager</h1>
        <p>Manage your contacts easily</p>
      </header>

      <main className="container">

        {/* FORM */}
        <section className="form-section">

          <div className="form-header">
            <h2>
              {editingId
                ? "Edit Contact"
                : "Add Contact"}
            </h2>

            {editingId && (
              <button
                type="button"
                className="cancel-btn"
                onClick={resetForm}
              >
                Cancel Edit
              </button>
            )}
          </div>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Personal">
                Personal
              </option>

              <option value="Work">
                Work
              </option>

              <option value="Family">
                Family
              </option>

              <option value="Other">
                Other
              </option>
            </select>

            <button type="submit">
              {editingId
                ? "Update Contact"
                : "Add Contact"}
            </button>

          </form>
        </section>

        {/* CONTACTS */}
        <section className="contacts-section">

          <div className="section-header">

            <h2>My Contacts</h2>

            <span>
              {filteredContacts.length}{" "}
              {filteredContacts.length === 1
                ? "Contact"
                : "Contacts"}
            </span>

          </div>

          {/* SEARCH + FILTER */}
          <div className="search-section">

            <input
              type="text"
              className="search-input"
              placeholder="🔍 Search by name, email or phone..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

            <select
              className="filter-select"
              value={filterCategory}
              onChange={(event) =>
                setFilterCategory(event.target.value)
              }
            >
              <option value="All">
                All Categories
              </option>

              <option value="Personal">
                Personal
              </option>

              <option value="Work">
                Work
              </option>

              <option value="Family">
                Family
              </option>

              <option value="Other">
                Other
              </option>
            </select>

            {(search || filterCategory !== "All") && (
              <button
                type="button"
                className="clear-btn"
                onClick={() => {
                  setSearch("");
                  setFilterCategory("All");
                }}
              >
                Clear
              </button>
            )}

          </div>

          {loading ? (
            <p className="loading">
              Loading contacts...
            </p>
          ) : filteredContacts.length === 0 ? (
            <p className="empty">
              No contacts match your search.
            </p>
          ) : (
            <div className="contacts-grid">

              {filteredContacts.map((contact) => (

                <div
                  className="contact-card"
                  key={contact._id}
                >

                  <div className="contact-top">

                    <div className="avatar">
                      {contact.name
                        .charAt(0)
                        .toUpperCase()}
                    </div>

                    <div>

                      <h3>{contact.name}</h3>

                      <span className="category">
                        {contact.category}
                      </span>

                    </div>

                  </div>

                  <div className="contact-info">

                    <p>
                      <strong>Email</strong>
                      <span>{contact.email}</span>
                    </p>

                    <p>
                      <strong>Phone</strong>
                      <span>{contact.phone}</span>
                    </p>

                    <p>
                      <strong>Address</strong>
                      <span>
                        {contact.address ||
                          "Not provided"}
                      </span>
                    </p>

                  </div>

                  <div className="card-actions">

                    <button
                      className="edit-btn"
                      onClick={() =>
                        handleEdit(contact)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        handleDelete(contact._id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}

            </div>
          )}

        </section>

      </main>

    </div>
  );
}

export default App;