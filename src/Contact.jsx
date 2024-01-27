import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

const Contact = () => {
  // État pour stocker les valeurs des champs du formulaire
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  // État pour gérer les erreurs de validation
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  // Fonction pour mettre à jour les valeurs des champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fonction pour valider le formulaire
  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Vérification du champ Nom complet
    if (formData.fullName.trim() === "") {
      newErrors.fullName = "Le champ Nom complet est requis";
      valid = false;
    } else {
      newErrors.fullName = "";
    }

    // Vérification du champ Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "L'adresse e-mail n'est pas valide";
      valid = false;
    } else {
      newErrors.email = "";
    }

    // Vérification du champ Sujet
    if (formData.subject.trim() === "") {
      newErrors.subject = "Le champ Sujet est requis";
      valid = false;
    } else {
      newErrors.subject = "";
    }

    // Vérification du champ Message
    if (formData.message.trim() === "") {
      newErrors.message = "Le champ Message est requis";
      valid = false;
    } else {
      newErrors.message = "";
    }

    // Mise à jour des erreurs
    setErrors(newErrors);

    return valid;
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation du formulaire avant envoi
    if (validateForm()) {
      // Logique pour traiter le formulaire (à remplacer par votre propre logique)
      console.log("Formulaire soumis :", formData);
      // Réinitialisation du formulaire après soumission
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <section className="container mt-5">
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Nom complet
          </label>
          <input
            type="text"
            className={`form-control ${errors.fullName && "is-invalid"}`}
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Adresse e-mail
          </label>
          <input
            type="email"
            className={`form-control ${errors.email && "is-invalid"}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Sujet
          </label>
          <input
            type="text"
            className={`form-control ${errors.subject && "is-invalid"}`}
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className={`form-control ${errors.message && "is-invalid"}`}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;
