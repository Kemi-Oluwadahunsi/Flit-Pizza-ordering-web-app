// pages/contact.js
"use client"
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s12w9r1",
        "template_50i59vp",
        formRef.current,
        "1bKnXjVSiJRKENmnQ"
      )
      .then(
        (result) => {
          setSuccess(true);
          setError(false);

          // Reset the form fields
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setError(true);
          setSuccess(false);
          console.log("Error sending email:", error);
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center max-w-[1600px] mx-auto">
      <div className="w-full md:max-w-xl p-8 bg-gray-200 shadow-lg border rounded-md lg:z-50 mt-20 lg:mt-12">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-600 ">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-600">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full h-48 border rounded-md"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
          {error && "Error"}
          {success && "Message sent successfully"}
        </form>
      </div>
    </div>
  );
};

export default Contact;
