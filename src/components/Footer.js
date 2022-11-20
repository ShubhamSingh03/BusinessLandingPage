import logo from "../images/Logo.png";
import insta from "../images/icons8-instagram.svg";
import fb from "../images/icons8-facebook.svg";
import twitter from "../images/icons8-twitter.svg";
import github from "../images/icons8-github.svg";
import reddit from "../images/icons8-reddit.svg";

export const Footer = () => {
  return (
    <>
    <footer class="footer">
    <div class="footer-container">
      <div class="footer-navbar">
        <div class="footer-logo">
          <img src={logo} alt="footer logo"/>
        </div>

        {/* <!-- social media svgs --> */}
        <div class="social-media">
          <div class="social-media-icon">
            <img src={insta} class="social-icon"/>
          </div>
          <div class="social-media-icon">
            <img src={fb} alt="Facebook logo " class="social-icon"/>
          </div>
          <div class="social-media-icon">
            <img src={twitter} alt="Twitter logo" class="social-icon"/>
          </div>
          <div class="social-media-icon">
            <img src={github} alt="Github logo" class="social-icon"/>
          </div>
          <div class="social-media-icon">
            <img src={reddit} alt="Reddit logo" class="social-icon"/>
          </div>
        </div>
      </div>
      <hr/>
      <div class="footer-items">
        <div class="item">
          <h5>Our Products</h5>
          <ul>
            <li>The Support Suite</li>
            <li>The Sales Suite</li>
            <li>Support</li>
            <li>Guide</li>
          </ul>
        </div>
        <div class="item">
          <h5>Top Features</h5>
            <ul>
              <li>Ticketing System</li>
              <li>Knowledge Base</li>
              <li>Community Forums</li>
              <li>Help Desk Software</li>
            </ul>
        </div>
        <div class="item">
          <h5>Resources</h5>
            <ul>
              <li>Product Support</li>
              <li>Request Demo</li>
              <li>Library</li>
              <li>Business Blog</li>
            </ul>
        </div>
        <div class="item">
          <h5>Company</h5>
            <ul>
              <li>About Us</li>
              <li>Press</li>
              <li>Investors</li>
              <li>Events</li>
            </ul>
        </div>
        <div class="item">
          <h5>Favourite Things</h5>
          <ul>
            <li>For Enterprise</li>
            <li>For Startups</li>
            <li>For Benchmark</li>
            <li>For Small Business</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}
