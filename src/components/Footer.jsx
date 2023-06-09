import React from "react";
import { miniLogo, okey } from "../img/index";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="wrapperFooter">
          <div className="section">
            <div>
              <a href="#">
                <img src={miniLogo} />
              </a>
            </div>
            <a href="#">
              <p>Download IDE</p>
            </a>
            <a href="#">
              <p>Pricing calculator</p>
            </a>
            <a href="#">
              <p>Changelog</p>
            </a>
            <a href="#">
              <p>Roadmap</p>
            </a>
            <a href="#">
              <p>Store</p>
            </a>
          </div>
          <div className="section">
            <div>
              <a href="#">Features</a>
            </div>
            <a href="#">
              <p>IDE</p>
            </a>
            <a href="#">
              <p>Bots trading</p>
            </a>
            <a href="#">
              <p>Edge network</p>
            </a>
          </div>
          <div className="section">
            <div>
              <a href="#">For business</a>
            </div>
            <a href="#">
              <p>Case studies</p>
            </a>
            <a href="#">
              <p>Enterprise</p>
            </a>
          </div>
          <div className="section">
            <div>
              <a href="#">Resources</a>
            </div>
            <a href="#">
              <p>Getting started</p>
            </a>
            <a href="#">
              <p>Documentation</p>
            </a>
            <a href="#">
              <p>Help center</p>
            </a>
            <a href="#">
              <p>Webinars</p>
            </a>
            <a href="#">
              <p>Community</p>
            </a>
          </div>
          <div className="section">
            <div>
              <a href="#">Company</a>
            </div>
            <a href="#">
              <p>About</p>
            </a>
            <a href="#">
              <p>Contact us</p>
            </a>
            <a href="#">
              <p>We're hiring</p>
            </a>
            <a href="#">
              <p>Merch store</p>
            </a>
            <a href="#">
              <p>Blog</p>
            </a>
          </div>
        </div>
        <div className="formContact">
          <h4>Tell me about new Crawless features as they come out</h4>
          <form>
            <input type="text" placeholder="My email" />
            <button type="submit">Subscribe</button>
          </form>
          <div className="btn">
            <img src={okey} />
            <p>
              By submitting this form, I agree to the Crawlerss Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
