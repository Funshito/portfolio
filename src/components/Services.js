import React from "react";

const Services = () => {
    return (
      <section className="services-section">
        <h1>Services</h1>
        <div className="services-container">
          {/* Service 1 */}
          <div className="service-card">
            <h3>Web Development</h3>
            <p>
              We build fast, responsive websites tailored to your business needs.
              Our team ensures high-quality web development with the latest
              technologies.
            </p>
          </div>
  
          {/* Service 2 */}
          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>
              Create powerful and user-friendly mobile apps for Android and iOS
              that engage users and elevate your business.
            </p>
          </div>
  
          {/* Service 3 */}
          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>
              Our designers create seamless user experiences and beautiful,
              functional interfaces to help users engage with your product
              effectively.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;