"use client";
import { useState } from "react";
import Image from "next/image";
import coverImage from "../../../public/images/REMOLQUE.jpg";

const ContactSection = ({ aboutDic, homeDic }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `*Nuevo Contacto - Madelto*%0A%0A*Nombre:* ${formData.name}%0A*Teléfono:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Estado:* ${formData.location}%0A*Mensaje:* ${formData.message}`;

    // WhatsApp business number (replace with actual number)
    const whatsappNumber = "523531043350"; // Replace with your WhatsApp business number

    // Open WhatsApp with pre-filled message
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
      location: "",
    });
  };

  return (
    <div id="formulario">
      <div className="w-full h-[600px] overflow-hidden top-0 relative flex justify-center items-center flex-col ">
        <div className="absolute bg-dark bg-opacity-60 w-full h-full z-0" />
        <Image
          src={coverImage}
          width={1920}
          height={600}
          priority
          loading="eager"
          alt="about us cover image"
          className="object-cover h-full w-full"
        />
        <div className="absolute z-10 text-white font-primary w-[50%] maxsm:w-[80%] text-center">
          <div className="w-full py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="uppercase text-2xl maxsm:text-xl tracking-widest mb-10">
                {aboutDic.contactForm?.title || "Contact Us"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center justify-between gap-4 maxsm:flex-col">
                  {/* Name Field */}
                  <div className="w-full">
                    {/* <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-200 mb-2"
                    >
                      {aboutDic.contactForm?.name || "Name"}
                    </label> */}
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={
                        aboutDic.contactForm?.namePlaceholder ||
                        "Enter your name"
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-black bg-opacity-40 focus:text-white"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="w-full">
                    {/* <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-200 mb-2"
                    >
                      {aboutDic.contactForm?.phone || "Phone"}
                    </label> */}
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder={
                        aboutDic.contactForm?.phonePlaceholder ||
                        "Enter your phone"
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-black bg-opacity-40 focus:text-white"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 maxsm:flex-col">
                  {/* Email Field */}
                  <div className="w-full">
                    {/* <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-200 mb-2"
                    >
                      {aboutDic.contactForm?.email || "Email"}
                    </label> */}
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={
                        aboutDic.contactForm?.emailPlaceholder || "Email"
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-black bg-opacity-40 focus:text-white"
                    />
                  </div>

                  {/* Location Dropdown */}
                  <div className="w-full">
                    {/* <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-200 mb-2"
                    >
                      {aboutDic.contactForm?.location || "State"}
                    </label> */}
                    <select
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-black bg-opacity-40 focus:text-white"
                    >
                      <option value="">
                        {aboutDic.contactForm?.locationPlaceholder ||
                          "Select your state"}
                      </option>
                      {aboutDic.contactForm?.states?.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Message Field */}
                <div>
                  {/* <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    {aboutDic.contactForm?.message || "Message"}
                  </label> */}
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="3"
                    placeholder={
                      aboutDic.contactForm?.messagePlaceholder ||
                      "Enter your message"
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-vertical bg-black bg-opacity-40 focus:text-white"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {aboutDic.contactForm?.btnText || "Send via WhatsApp"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
