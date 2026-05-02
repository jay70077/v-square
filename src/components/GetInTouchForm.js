"use client";

import { useState } from "react";

export default function GetInTouchForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", mobile: "", email: "", description: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p>We'd love to hear from you. Send us a message!</p>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Your Mobile Number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about your project..."
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" className="cta-button">
            Send Message
          </button>

          {submitted && (
            <div className="success-message">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
