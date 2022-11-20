import logo from "../images/Logo.png";

const Navbar = () => {
  return (
    <>
      <div class="navbar">
        <div class="logo-img">
          <img src={logo} alt="header-logo" />
        </div>
        <div>
          <ul class="nav-items">
            <li>Home</li>
            <li>About Us</li>
            <li>Pages</li>
            <li>Agent</li>
            <li>Blog</li>
            <li>Subscribe</li>
          </ul>
        </div>
        <div class="letstalk-button">
          <button>Let's Talk</button>
        </div>
      </div>
    </>
  )
}

export default Navbar