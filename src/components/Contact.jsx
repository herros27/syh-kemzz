import React, { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mengirim email menggunakan EmailJS
    emailjs
      .send(
        "service_d8btz48",
        "template_362i3eo",
        formData,
        "u5poli8ph7q5UQfae"
      )
      .then((response) => {
        console.log("Email sent successfully", response);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => {
        console.error("Failed sending email", error);
      });
  };

  return (
    <section className="bg-midnight py-16" id="contact">
      <AnimatedSection className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
        <div className="max-w-lg mx-auto">
          {submitted ? (
            <div
              className="w-full bg-midnight text-white px-4 py-3 rounded relative text-center"
              role="alert"
            >
              <strong className="font-bold">Message Sent Successfully</strong>
              <span className="block sm:inline">
                {" "}
                Thanks for Contact me 🙏😁.
              </span>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                {/* <label className="block text-white mb-2">Nama</label> */}
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Nama Anda"
                  required
                />
              </div>
              <div>
                {/* <label className="block text-white mb-2">Email</label> */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div>
                {/* <label className="block text-white mb-2">Pesan</label> */}
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Tulis pesan Anda di sini..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-metal text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Kirim Pesan
              </button>
            </form>
          )}
        </div>
      </AnimatedSection>
    </section>
  );
};
