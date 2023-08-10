import Header from "../components/Header";
import React from "react";
import useFetchServices from "../components/useFetchServices";
import "./Service.css";
import Footer from "../components/Footer";

function Service() {
  const { services, loading, error } = useFetchServices();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <Header />
      <div className="header">
        <h1 className="header-title">Services</h1>
      </div>
      <div className="service-container">
        <ul className="service-listing">
          {services.map((service) => (
            <li key={service.id} className="service-box">
              <h2>{service.name}</h2>
              <p className="service-details">{service.description}</p>
              <p className="service-details">{service.category}</p>
              <p className="service-details">{service.price}</p>
              <p className="service-details">{service.location}</p>
            </li>
          ))}
        </ul>
      </div>
      <div class="footer">
          <Footer />
      </div>
    </div>
  );
}

export default Service;
