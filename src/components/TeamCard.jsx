
const TeamCard = ({person, name }) => {
  return (
    <div class="member">
        <img src={person} alt="Member 1 image"/>
        <h3>{name}</h3>
        <p>
          Introduction start procrasninate 2 hours get <br/> to do work get to do
          work while eating
        </p>
    </div>
  )
}

export default TeamCard