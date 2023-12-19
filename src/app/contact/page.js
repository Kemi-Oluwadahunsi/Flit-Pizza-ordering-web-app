// pages/contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full md:max-w-xl p-8 bg-gray-200 shadow-lg border rounded-md z-50 mt-12">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-600 ">
              Name
            </label>
            <input
              type="text"
              name="name"
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
        </form>
      </div>
    </div>
  );
};

export default Contact;
