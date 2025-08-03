import React from 'react';

function ConfirmationModal({ appointmentData, onConfirm, onClose }) {
  return (
    <div className="modal-backdrop d-flex justify-content-center align-items-center" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1050
    }}>
      <div className="card confirmation-modal shadow-lg">
        <div className="card-body p-4">
          <div className="text-center mb-4">
            <i className="fas fa-check-circle fa-3x text-success mb-3"></i>
            <h2 className="text-success mb-0">Appointment Confirmed!</h2>
          </div>
          
          <div className="mb-4">
            <h5 className="text-dark mb-3">
              <i className="fas fa-info-circle me-2"></i>
              Appointment Details:
            </h5>
            <div className="alert alert-light">
              <div className="row">
                <div className="col-md-6">
                  <p className="mb-1"><strong>Doctor:</strong> {appointmentData.doctor.name}</p>
                  <p className="mb-1"><strong>Specialization:</strong> {appointmentData.doctor.specialization}</p>
                  <p className="mb-1"><strong>Patient:</strong> {appointmentData.patientName}</p>
                </div>
                <div className="col-md-6">
                  <p className="mb-1"><strong>Email:</strong> {appointmentData.email}</p>
                  <p className="mb-1"><strong>Phone:</strong> {appointmentData.phone}</p>
                  <p className="mb-1"><strong>Date:</strong> {appointmentData.date}</p>
                  <p className="mb-0"><strong>Time:</strong> {appointmentData.time}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="alert alert-success">
            <i className="fas fa-info-circle me-2"></i>
            Your appointment has been successfully booked! You will receive a confirmation email shortly.
            Please arrive 10 minutes before your scheduled appointment time.
          </div>

          <div className="d-flex justify-content-end gap-2">
            <button onClick={onClose} className="btn btn-outline-secondary">
              <i className="fas fa-times me-2"></i>
              Close
            </button>
            <button onClick={onConfirm} className="btn btn-primary">
              <i className="fas fa-home me-2"></i>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;