import React, { useState } from "react";
import emailjs from "emailjs-com";

const CommissionsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    technique: "",
    details: "",
  });
  const [isMessageSent, setIsMessageSent] = useState(false); // Nuevo estado para el mensaje

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tk7wuzg",
        "template_d4no76b",
        formData,
        "mGDUnoM3sWAx7labJ"
      )
      .then((response) => {
        console.log("Éxito:", response.status, response.text);
        setIsMessageSent(true); // Cambia el estado a true al enviar exitosamente
        setFormData({
          name: "",
          email: "",
          technique: "",
          details: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsMessageSent(false); // Maneja el error si es necesario
      });
  };

  return (
    <div className="max-w-3xl mt-5 mx-auto p-5 bg-white rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold mb-4">Art Commissions</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="technique"
          >
            Technique
          </label>
          <select
            name="technique"
            id="technique"
            value={formData.technique}
            onChange={handleChange}
            required
            className="w-full h-12 border border-gray-300 p-2 rounded-lg"
          >
            <option value="">Select Technique</option>
            <option value="oil">Oil</option>
            <option value="pencil_charcoal">Pencil/Charcoal Drawing</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="details"
          >
            Commission details
          </label>
          <textarea
            name="details"
            id="details"
            value={formData.details}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border border-gray-300 p-2 rounded-lg"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#13212e] text-white font-bold py-2 rounded-lg hover:bg-[#1a1a1a] transition"
        >
          Submit
        </button>
      </form>
      {isMessageSent && ( // Mensaje de confirmación
        <p className="mt-4 text-green-600">
          Your message has been sent! You will receive a response soon.
        </p>
      )}
    </div>
  );
};

export default CommissionsForm;
