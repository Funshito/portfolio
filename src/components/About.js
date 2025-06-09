
import React from "react";
const About = () => {
    return (
      <section className="about-section" id="about">
        <div className="about-container">
          {/* About Text */}
          <div className="about-text">
            <h2>About Us</h2>
            <p>
            Creative and detail-oriented Front-End Developer with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React. Skilled in building responsive, user-friendly interfaces and translating UI/UX designs into clean, maintainable code. Passionate about creating seamless web experiences with performance and accessibility in mind. Experienced in collaborating with cross-functional teams and continuously learning new technologies to deliver high-quality digital products.

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