import { useState } from "react";
const ucraftMainTeams = {
  hoory: "good team",
  builder: "cool team",
  ucCommerce: "best team :D",
};

const ucraftAllTeams = {
  ...ucraftMainTeams,
  springBuilder: "really big team",
  aiTeam: "Levon is master jedi",
};

console.log(ucraftMainTeams);
console.log(ucraftAllTeams);

const Teams = () => {
  const [teams, setTeams] = useState({});
  return (
    <div>
      <h3>Current Team:</h3>
      <button onClick={() => setTeams(ucraftMainTeams)}>Main Teams</button>
      <button onClick={() => setTeams(ucraftAllTeams)}>All Teams</button>
      <ul>
        {Object.keys(teams).map((team) => (
          <li key={team}>
            {team}: {teams[team]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
