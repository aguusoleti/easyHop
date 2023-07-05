import React, { useState } from "react";
import { FormData } from "../../../interfaces/interfaces";
import "./myFormStyles.css";
import { useMedia } from "../../hooks/useMedia";

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phoneNumber: "",
    contactPreference: "",
  });
  console.log(formData)

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
  };
  const media = useMedia();
  
  const isFormValid =
    formData.fullName && formData.phoneNumber && formData.contactPreference;
  return (
    <div
      className={`${
        media === "mobile"  
          ? "containerMobile"
          : "containerDesktop"
      }`}
    >
      <h1>Personal Information</h1>
      
      <div className="general">
        <form onSubmit={handleSubmit} className="form">
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Contact Preference:
            <select
              name="contactPreference"
              value={formData.contactPreference}
              onChange={handleInputChange}
            >
              <option value="">Select</option>
              <option value="Correo">Correo</option>
              <option value="Teléfono">Teléfono</option>
            </select>
          </label>
          <button type="submit" className="button" disabled={!isFormValid}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyForm;
