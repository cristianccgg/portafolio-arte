import React, { useState } from "react";
import emailjs from "emailjs-com"; // Importar EmailJS

interface Artwork {
  title: string;
  technique: string;
  measures: string;
  description: string;
  price: number;
  images: string[];
}

interface PurchaseFormProps {
  artwork: Artwork;
  className?: string; // Agregar className como prop opcional
}

const PurchaseForm: React.FC<PurchaseFormProps> = ({ artwork, className }) => {
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerAddress, setBuyerAddress] = useState("");
  const [buyerCity, setBuyerCity] = useState("");
  const [buyerCountry, setBuyerCountry] = useState("");
  const [buyerPostalCode, setBuyerPostalCode] = useState("");
  const [buyerMessage, setBuyerMessage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isFormVisible, setFormVisible] = useState(false);
  const [isMessageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Interés en comprar: ${artwork.title}.\nNombre: ${buyerName}\nEmail: ${buyerEmail}\nDirección: ${buyerAddress}\nCiudad: ${buyerCity}\nPaís: ${buyerCountry}\nCódigo Postal: ${buyerPostalCode}\nCantidad: ${quantity}\nMensaje: ${buyerMessage}`;

    const templateParams = {
      from_name: buyerName,
      to_name: "Cristian Gutierrez",
      from_email: buyerEmail,
      message: message,
    };

    emailjs
      .send(
        "service_tk7wuzg",
        "template_ddwjt0w",
        templateParams,
        "mGDUnoM3sWAx7labJ"
      )
      .then((response) => {
        console.log("Correo enviado:", response.status, response.text);
        setMessageSent(true);
        resetForm();
      })
      .catch((error) => {
        console.error("Error al enviar el correo:", error);
      });
  };

  const resetForm = () => {
    setBuyerName("");
    setBuyerEmail("");
    setBuyerAddress("");
    setBuyerCity("");
    setBuyerCountry("");
    setBuyerPostalCode("");
    setBuyerMessage("");
    setQuantity(1);
    setFormVisible(false);
  };

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
    setMessageSent(false);
  };

  return (
    <div
      className={`purchase-form flex flex-col items-center mt-4 ${className}`}
    >
      <h2 className="text-xl font-bold text-center">
        Would you like to have "{artwork.title}"
      </h2>
      <button
        onClick={toggleFormVisibility}
        className="mt-4 bg-indigo-600 text-white p-3 rounded font-semibold hover:bg-indigo-900"
      >
        {isFormVisible
          ? "Close Form"
          : "Get a quote with shipping included or make an offer"}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mt-4">
          <h1 className="text-center mb-4">
            Please fill out this form to receive a quote with shipping included
          </h1>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={buyerName}
              onChange={(e) => setBuyerName(e.target.value)}
              required
              className="border p-2 w-full"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={buyerEmail}
              onChange={(e) => setBuyerEmail(e.target.value)}
              required
              className="border p-2 w-full"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={buyerAddress}
              onChange={(e) => setBuyerAddress(e.target.value)}
              required
              className="border p-2 w-full"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={buyerCity}
              onChange={(e) => setBuyerCity(e.target.value)}
              required
              className="border p-2 w-full"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              value={buyerCountry}
              onChange={(e) => setBuyerCountry(e.target.value)}
              required
              className="border p-2 w-full"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="postalCode">Zip code:</label>
            <input
              type="text"
              id="postalCode"
              value={buyerPostalCode}
              onChange={(e) => setBuyerPostalCode(e.target.value)}
              required
              className="border p-2 w-full"
            />
          </div>
          <div className="mt-2">
            <label htmlFor="message">Message (optional):</label>
            <textarea
              id="message"
              value={buyerMessage}
              onChange={(e) => setBuyerMessage(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-indigo-500 text-white p-2 rounded font-semibold hover:bg-indigo-800"
          >
            Submit
          </button>
        </form>
      )}
      {isMessageSent && (
        <p className="mt-4 text-green-600">
          Your message has been sent! You will receive a response soon.
        </p>
      )}
    </div>
  );
};

export default PurchaseForm;
