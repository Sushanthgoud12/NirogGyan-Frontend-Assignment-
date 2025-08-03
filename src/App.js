import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import DoctorList from "./components/DoctorList";
import DoctorProfile from "./components/DoctorProfile";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="container py-4">
          <Routes>
            <Route path="/" element={<DoctorList />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/book/:doctorId" element={<BookingForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
