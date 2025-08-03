import React from "react";
import { useParams, Link } from "react-router-dom";
import { doctors } from "../data/doctorsData";

function DoctorProfile() {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="text-center py-5">
        <i className="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i>
        <h2 className="text-muted">Doctor not found</h2>
        <Link to="/" className="btn btn-primary">
          <i className="fas fa-home me-2"></i>
          Back to Home
        </Link>
      </div>
    );
  }

  const getAvailabilityBadgeClass = (availability) => {
    switch (availability) {
      case "Available Today":
        return "bg-success";
      case "Fully Booked":
        return "bg-danger";
      case "On Leave":
        return "bg-warning text-dark";
      default:
        return "bg-secondary";
    }
  };

  return (
    <div className="card shadow">
      <div className="card-body p-4">
        <div className="row">
          <div className="col-md-3 text-center mb-4 mb-md-0">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="doctor-profile-image mb-3"
            />
          </div>
          <div className="col-md-9">
            <div className="d-flex align-items-center mb-3">
              <h1 className="h2 mb-0 me-3">{doctor.name}</h1>
              <span
                className={`badge availability-badge ${getAvailabilityBadgeClass(
                  doctor.availability
                )}`}
              >
                {doctor.availability}
              </span>
            </div>
            <h4 className="text-muted mb-3">{doctor.specialization}</h4>
            <p className="text-muted mb-4">{doctor.description}</p>

            <div className="row mb-4">
              <div className="col-md-6">
                <h5 className="text-dark mb-2">
                  <i className="fas fa-clock me-2"></i>
                  Experience
                </h5>
                <p className="text-muted">{doctor.experience}</p>
              </div>
              <div className="col-md-6">
                <h5 className="text-dark mb-2">
                  <i className="fas fa-graduation-cap me-2"></i>
                  Education
                </h5>
                <p className="text-muted">{doctor.education}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h5 className="text-dark mb-3">
            <i className="fas fa-calendar-alt me-2"></i>
            Weekly Schedule
          </h5>
          <div className="row g-3">
            {Object.entries(doctor.schedule).map(([day, time]) => (
              <div key={day} className="col-md-6 col-lg-4">
                <div className="card schedule-card">
                  <div className="card-body p-3">
                    <h6 className="card-title text-capitalize mb-1">{day}</h6>
                    <p className="card-text text-muted mb-0">{time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          {doctor.availability === "Available Today" && (
            <Link to={`/book/${doctor.id}`} className="btn btn-primary btn-lg">
              <i className="fas fa-calendar-plus me-2"></i>
              Book Appointment
            </Link>
          )}

          {doctor.availability !== "Available Today" && (
            <button className="btn btn-secondary btn-lg" disabled>
              <i className="fas fa-calendar-times me-2"></i>
              {doctor.availability === "Fully Booked"
                ? "Fully Booked"
                : "On Leave"}
            </button>
          )}

          <Link to="/" className="btn btn-outline-secondary btn-lg">
            <i className="fas fa-arrow-left me-2"></i>
            Back to Doctors
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfile;
