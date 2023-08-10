import Header from "../components/Header";
import React from "react";
import "./Policy.css"; // Import the new CSS file
import Footer from "../components/Footer"

function Policy() {
  return (
    <div>
      <Header />
      <header className="header">
        <h1 className="header-title">Policy Information</h1>
      </header>
      <div className="policy-content">
        <p>
          Welcome to our platform for accessing public services, including
          concrete work and grocery getting. This policy outlines the guidelines
          and expectations for using our services responsibly and safely.
        </p>

        <div className="policy-section">
          <h2 className="policy-section-heading">1. Service Requests</h2>
          <p className="policy-section-text">
            To request a public service, please provide accurate and detailed
            information about your requirements. This helps us match you with
            the right service providers and ensure a smooth experience.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">2. Service Providers</h2>
          <p className="policy-section-text">
            Our service providers are carefully selected professionals who offer
            quality services. We strive to ensure that they meet the necessary
            qualifications and adhere to safety standards.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">3. Safety Precautions</h2>
          <p className="policy-section-text">
            Your safety is our top priority. When engaging with public services
            like concrete work or grocery getting, please follow all safety
            guidelines provided by the service provider. Use personal protective
            equipment (PPE) as recommended and maintain a safe distance from
            workers when necessary.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">4. Communication</h2>
          <p className="policy-section-text">
            Open and clear communication is essential. If you have any
            questions, concerns, or changes to your service request, please
            communicate promptly with the service provider or our customer
            support team.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">5. Payment</h2>
          <p className="policy-section-text">
            Payment for public services should be made according to the
            agreed-upon terms. We recommend using secure payment methods to
            protect your financial information.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">6. Feedback and Reviews</h2>
          <p className="policy-section-text">
            After receiving a service, you have the opportunity to provide
            feedback and reviews. Your input helps us maintain quality standards
            and improve our services.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">7. Legal Compliance</h2>
          <p className="policy-section-text">
            All users of our platform are expected to comply with local laws and
            regulations while using public services. Any illegal or unethical
            activities will not be tolerated.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">8. Disclaimer</h2>
          <p className="policy-section-text">
            While we strive to provide accurate and reliable information, we are
            not responsible for any issues or disputes that may arise between
            users and service providers.
          </p>
        </div>

        <div className="policy-section">
          <h2 className="policy-section-heading">9. Contact Information</h2>
          <p className="policy-section-text">
            If you have any questions about our public services policy, please
            contact our customer support team at{" "}
            <a className="policy-link" href="mailto:service-Fusion@gmail.com">
              service-Fusion@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Policy;
