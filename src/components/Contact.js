import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert("Form Submitted!");
      // You can add logic to send form data to the backend here
    };
  
    return (
      <section className="contact-section">
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-container">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            />
            <button type="submit">Send Message</button>
          </form>
  
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>Phone: (234) 807 409 3876</p>
            <p>Email: oluwafunshoalabi97@gmail.com</p>
            <p>Address: 100283, Lagos Nigeria</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;