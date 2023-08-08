import Header from "../components/Header"
import React from "react";

function Home() {
    return(
        <div className="homepage">
        <Header />
        <header className="header">
          <h1 className="header-title">Welcome to Service Fusion</h1>
        </header>
        <div className="container">
          <section id="home" className="section">
            <h2 className="section-title">Bringing Communities Together</h2>
            <p className="section-content">
              At Service Fusion, we are driven by a steadfast commitment to
              fostering a stronger, more vibrant, and connected community. We're a
              community-oriented company dedicated to enhancing the lives of our
              neighbors. Our mission is to create connections and provide
              essential services that improve the well-being of our community.
            </p>
          </section>
        </div>
        <div className="container">
          <section id="home" className="section">
            <h2 className="section-title">Our Values</h2>
            <p className="section-content">
              <strong>Community Empowerment: </strong>We believe in the power of
              community collaboration and empowerment. By working together, we
              create a supportive environment where each individual's strengths
              contribute to the betterment of the whole.
            </p>
  
            <p className="section-content">
              <strong>Sustainability: </strong>We are dedicated to promoting
              sustainable practices that preserve our environment and improve the
              well-being of both current and future generations.
            </p>
  
            <p className="section-content">
              <strong>Compassion: </strong> We approach every interaction with
              empathy, understanding, and a genuine desire to make a positive
              difference in the lives of those we serve.
            </p>
  
            <p className="section-content">
              <strong>Creativity: </strong>We embrace creativity as a catalyst for
              innovation and problem-solving. We encourage fresh ideas that
              address community challenges and drive positive outcomes.
            </p>
  
            <p className="section-content">
              <strong>Empowerment: </strong> Through education, support, and
              resource-sharing, we empower individuals and families to take
              control of their lives and build a brighter future.
            </p>
            <p className="last-paragraph">
              At Service Fusion, these values serve as our compass, guiding us as
              we work tirelessly to create a community where everyone thrives.
              Join us on this journey of positive change, where each small step we
              take together contributes to a greater collective impact.
            </p>
          </section>
        </div>
  
        <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()} Service Fusion. All rights reserved.{" "}
          </p>
        </footer>
      </div>
    );
}

export default Home;
