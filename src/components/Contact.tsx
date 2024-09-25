import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full  py-16 px-4 md:px-0">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <p className="text-center text-gray-600 mb-12">
          Have questions? We'd love to hear from you! Reach out to us using the form below or through the provided contact details.
        </p>

        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Form */}
          <div className="md:w-2/3 bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Send us a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-primary"
                  rows={5}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="md:w-1/3 mt-8 md:mt-0 md:ml-8 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-4">
              You can also reach us at:
            </p>
            <p className="text-gray-700 mb-2">
              <i className="fas fa-phone mr-2"></i> +1 234 567 890
            </p>
            <p className="text-gray-700 mb-2">
              <i className="fas fa-envelope mr-2"></i> contact@yourcompany.com
            </p>
            <p className="text-gray-700">
              <i className="fas fa-map-marker-alt mr-2"></i> 1234 Street Name, City, Country
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
