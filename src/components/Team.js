import person1 from "../images/team1.jpg"
import person2 from "../images/team2.jpg"
import person3 from "../images/team3.jpg"

export const Team = () => {
  return (
    <>
    <div class="team-heading">
      <h3>Meet our great Creative Team</h3>
      <p>
        Our journey began with a simple idea make a simple journey make this
        world more function. We collaborate with organizations that are keen
        transform
      </p>
    </div>
    <div class="team-members">
      {/* <!-- member1 --> */}
      <div class="member">
        <img src={person1} alt="Member 1 image"/>
        <h3>Amera Amanda</h3>
        <p>
          Introduction start procrasninate 2 hours get <br/> to do work get to do
          work while eating
        </p>
      </div>
      {/* <!-- member2 --> */}
      <div class="member">
        <img src={person2} alt="Member 2 image"/>
          <h3>Lucas Podolski</h3>
          <p>
            Introduction start procrasninate 2 hours get <br/> to do work get to do
            work while eating
          </p>
      </div>
      {/* <!-- member3 --> */}
      <div class="member">
        <img src={person3} alt="Member 3 image"/>
          <h3>Leny Marissa Nasution</h3>
          <p>
            Introduction start procrasninate 2 hours get <br/> to do work get to do
            work while eating
          </p>
      </div>
    </div>
    <div class="button-see-more">
      <button class="btn">See More</button>
    </div>
    </>
  )
}
