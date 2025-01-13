
import React from "react";

const About = () => {
    return (
      <section className="about-section">
        <div className="about-container">
          {/* About Text */}
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Welcome to our company! We are dedicated to delivering innovative
              solutions tailored to meet your needs. Our team of professionals
              works tirelessly to ensure customer satisfaction and quality
              results.
            </p>
            <p>
              From design to development, we specialize in turning ideas into
              reality. Let's build something amazing together!
            </p>
          </div>
  
          {/* About Image */}
          <div className="about-image">
            <img
              src="https://via.placeholder.com/400"
              alt="About Us"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default About;