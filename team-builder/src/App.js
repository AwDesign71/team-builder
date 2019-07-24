import React, {useState} from 'react';
import './App.css';
import Members from './teamData';

function App() {
  const [teams, setTeams] = useState(Members)
  const handleValue = (event)=> {
    setTeams(event.target.value);
    console.log(teams)
  }
  return (
    <div className="App">
      <header className="App-header">
        { console.log(teams)}
        {/* <h1>{teams.map(team=>
          <div>{team.name}</div>)}</h1> */}
      </header>
      <section>
      <form action="">
        <legend>
          <label htmlFor="">
            Member Name:
            <input type="text" name={handleValue.name} onChange={event=>handleValue(event)} />
          </label>
          <label htmlFor="">
            Member Email:
            <input type="text" name='email'/>
          </label>
          <label htmlFor="">
            Member Role:
            <input type="text" name='role'/>
          </label>
          
        </legend>
      </form>
      </section>
    </div>
  );
}

export default App;
