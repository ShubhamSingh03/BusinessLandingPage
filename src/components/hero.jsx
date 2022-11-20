import heroimg from "../images/navimg.jpg";
import mailimg from "../images/mail..svg";

export default function Hero(){
  return (
    <>
    <div class="hero-section">
        <div class="hero-left">
          <img src={heroimg} alt="Hero Image"/>
        </div>
        <div class="hero-right">
          <h1>
            Empowering your business with the best solution
          </h1>
          <p>
            We connect your brand & businesses with your target market in the
            most desirable, refined, and elvated way possible through the
            digital medium
          </p>
          <div class="contact-email">
            <div>
              <img src={mailimg} alt="mail icon" />
                <input type="email" placeholder="Enter your mail address"
                />
            </div>
            <div>
              <button class="letstalk-btn">Let's Talk</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}