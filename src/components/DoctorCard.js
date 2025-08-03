import React from 'react';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  const getAvailabilityBadgeClass = (availability) => {
    switch (availability) {
      case 'Available Today':
        return 'bg-success';
      case 'Fully Booked':
        return 'bg-danger';
      case 'On Leave':
        return 'bg-warning text-dark';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div className="card doctor-card h-100 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="doctor-image me-3"
          />
          <div className="flex-grow-1">
            <h5 className="card-title mb-1">{doctor.name}</h5>
            <p className="card-text text-muted mb-2">{doctor.specialization}</p>
            <span className={`badge availability-badge ${getAvailabilityBadgeClass(doctor.availability)}`}>
              {doctor.availability}
            </span>
          </div>
        </div>
        <p className="card-text text-muted">
          {doctor.description.substring(0, 100)}...
        </p>
        <Link to={`/doctor/${doctor.id}`} className="btn btn-primary w-100">
          <i className="fas fa-user-md me-2"></i>
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;