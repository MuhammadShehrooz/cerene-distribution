import React from "react";

const Footer = () => {
  return (
    <div>
      <div id="contact-section" className="container-fluid footer">
        <div className="container py-5">
          <h2 className="text-center text-white mb-5 fs-48 Recoleta">
            Serene Distrubution Company
          </h2>
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">About Us</h4>
                <p className="mb-3 Raleway">
                  Serene Distribution provides supply chain solutions for food
                  industries, retail, and catering. As a family business, we are
                  committed to the success of our partners.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item d-flex flex-column Raleway">
                <h4 className="text-white mb-4">Quick Links</h4>
                <a href="#about-section">
                  <i className="fas fa-angle-right me-2"></i> About
                </a>
                <a href="#whyus-section">
                  <i className="fas fa-angle-right me-2"></i> Why Us?
                </a>
                <a href="#products-section">
                  <i className="fas fa-angle-right me-2"></i> Products
                </a>
                <a href="#contact-section">
                  <i className="fas fa-angle-right me-2"></i> Contact
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4">
              <div className="footer-item d-flex flex-column">
                <h4 className="text-white mb-4">Contact Info</h4>
                <a href="#">
                  <i className="fa fa-building me-2"></i> Serene DC Food,
                  Beverage Trading LLC
                </a>
                <a href="#">
                  <i className="fa fa-map-marker-alt me-2"></i> Jebel Ali
                  Industrial Area ,Dubai, UAE
                </a>
                <a href="mailto:info@example.com">
                  <i className="fas fa-envelope me-2"></i>
                  sales@serenedistribution.com
                </a>
                <a href="tel:+012 345 67890">
                  <i className="fas fa-phone me-2"></i> 048322317
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-dark text-white py-3">
        <div className="container text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Serene Distribution. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
