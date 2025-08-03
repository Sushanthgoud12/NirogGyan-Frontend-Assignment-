import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link to="/" className="navbar-brand text-decoration-none">
          <i className="fas fa-hospital me-2"></i>
          <span className="fw-bold">Healthcare Appointment Booking</span>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
