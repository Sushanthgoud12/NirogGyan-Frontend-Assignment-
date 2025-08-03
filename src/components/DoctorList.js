import React, { useState } from "react";
import { doctors } from "../data/doctorsData";
import DoctorCard from "./DoctorCard";
import SearchBar from "./SearchBar";

function DoctorList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="row mb-4">
        <div className="col">
          <h2 className="text-dark mb-0">
            <i className="fas fa-user-md me-2"></i>
            Find Your Doctor
          </h2>
        </div>
      </div>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="row g-4">
        {filteredDoctors.map((doctor) => (
          <div key={doctor.id} className="col-lg-4 col-md-6">
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </div>

      {filteredDoctors.length === 0 && (
        <div className="text-center py-5">
          <i className="fas fa-search fa-3x text-muted mb-3"></i>
          <h3 className="text-muted">No doctors found</h3>
          <p className="text-muted">Try adjusting your search terms.</p>
        </div>
      )}
    </div>
  );
}

export default DoctorList;
