import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doctors } from "../data/doctorsData";
import ConfirmationModal from "./ConfirmationModal";

function BookingForm() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((d) => d.id === parseInt(doctorId));
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formData, setFormData] = useState({
    patientName: "",
    email: "",
    date: "",
    time: "",
    phone: "",
  });

  if (!doctor) {
    return (
      <div className="text-center py-5">
        <i className="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i>
        <h2 className="text-muted">Doctor not found</h2>
        <button onClick={() => navigate("/")} className="btn btn-primary">
          <i className="fas fa-home me-2"></i>
          Back to Home
        </button>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    navigate("/");
  };

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="btn btn-outline-secondary mb-4"
      >
        <i className="fas fa-arrow-left me-2"></i>
        Back
      </button>

      <div className="card shadow">
        <div className="card-body p-4">
          <h2 className="card-title mb-4">
            <i className="fas fa-calendar-plus me-2"></i>
            Book Appointment
          </h2>

          <div className="alert alert-info mb-4">
            <h6 className="alert-heading mb-2">
              <i className="fas fa-user-md me-2"></i>
              Doctor Details
            </h6>
            <p className="mb-1">
              <strong>Name:</strong> {doctor.name}
            </p>
            <p className="mb-0">
              <strong>Specialization:</strong> {doctor.specialization}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="patientName" className="form-label">
                  <i className="fas fa-user me-2"></i>
                  Patient Name *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="patientName"
                  name="patientName"
                  value={formData.patientName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  <i className="fas fa-envelope me-2"></i>
                  Email *
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="phone" className="form-label">
                  <i className="fas fa-phone me-2"></i>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="date" className="form-label">
                  <i className="fas fa-calendar me-2"></i>
                  Preferred Date *
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="time" className="form-label">
                <i className="fas fa-clock me-2"></i>
                Preferred Time *
              </label>
              <select
                className="form-select"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              >
                <option value="">Select a time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="12:00">12:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="17:00">05:00 PM</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary btn-lg w-100">
              <i className="fas fa-calendar-check me-2"></i>
              Book Appointment
            </button>
          </form>
        </div>
      </div>

      {showConfirmation && (
        <ConfirmationModal
          appointmentData={{ ...formData, doctor }}
          onConfirm={handleConfirm}
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
}

export default BookingForm;
