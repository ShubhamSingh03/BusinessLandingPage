import secOneimg from "../images/section1.jpg";
import secTwoimg from "../images/section2.jpg";
// import secThreeimg from "../images/section3.jpg";

const Services = () => {
  return (
    <>
    <h2 class="web-design-heading">We have made your care easy for you</h2>
    <div class="services">
      <div class="service-details">
        <h3>Effective Website Design and Development</h3>
        <p>
          By connecting patients all over the world to the best instructors,
          Healthycare helping individuals reach their goals and pursue their
          dreams.
        </p>
        <button>Let's Talk</button>
      </div>
      <div class="services-img">
        <img src={secOneimg} alt="section1 image" />
      </div>
    </div>
    <div class="services">
      <div class="services-img">
        <img id="section2-img" src={secTwoimg} alt="section2 image"/>
      </div>
      <div class="service-details">
        <h3>We Give Proven Digital Marketing Strategies for Our Clients</h3>
        <p>
          Consultant working hard and we collaborate with organizations that
          are keen transform the legal industry. reach their goals and pursue
          their dreams.
        </p>
        <button>Let's Talk</button>
      </div>
    </div>
    {/* <div class="services">
      <div class="service-details">
        <h3>People Will Always Judge the book by it's cover.</h3>
        <p>
          By connecting patients all over the world to the best instructors,
          Healthycare helping individuals reach their goals and pursue their
          dreams.
        </p>
        <button>Let's Talk</button>
      </div>
      <div class="services-img">
        <img id="section3-img" src={secThreeimg} alt="section3 image"/>
      </div>
    </div> */}
    </>
  )
}

export default Services