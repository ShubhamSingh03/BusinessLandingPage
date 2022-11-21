import person1 from "../images/team1.jpg"
import person2 from "../images/team2.jpg"
import person3 from "../images/team3.jpg"
import TeamCard from "./TeamCard"

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
      <TeamCard person={person1} name="Amera Amanda"/>
      <TeamCard person={person2} name="Lucas Podolski"/>
      <TeamCard person={person3} name="Leny Marissa Nasution" />
    </div>
    <div class="button-see-more">
      <button class="btn">See More</button>
    </div>
    </>
  )
}
