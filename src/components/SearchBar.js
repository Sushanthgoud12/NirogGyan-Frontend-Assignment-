import React from "react";

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="mb-4">
      <div className="input-group">
        <span className="input-group-text">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="text"
          className="form-control search-input"
          placeholder="Search doctors by name or specialization..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
