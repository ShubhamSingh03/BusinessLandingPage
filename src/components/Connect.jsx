import statsimg from "../images/main.jpg";
import playimg from "../images/play.svg";

const connect = () => {
  return (
    <>
    <h2 class="stats-heading">
      We Connect your businesses with your target
    </h2>
    <div class="stats-connecting">
      <div class="stats">
        <h3>1,093</h3>
        <p>Finished Project</p>
      </div>
      <div class="stats">
        <h3>3,355</h3>
        <p>Enrolled Project</p>
      </div>
      <div class="stats">
        <h3>40</h3>
        <p>Team Worker</p>
      </div>
      <div class="stats">
        <h3>90%</h3>
        <p>Success Rate</p>
      </div>
    </div>
    <div class="stats-img">
      <img src={statsimg} alt="stats section image" />
      <img src={playimg} alt="Play Button svg" />
    </div>
    </>
  )
}

export default connect