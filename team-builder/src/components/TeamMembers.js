import React, {useState, useEffect} from 'react';
import Members from '../teamData';
const Teammembers = ()=> {
    const [teams, setTeams] = useState(Members)
   console.log(teams)
    return(
        <>
        <h1>{teams.map(teams=>
            teams.name)}</h1>
        </>
    );
}
export default Teammembers;