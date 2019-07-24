import React, {useState} from 'react';
import './App.css';
import Members from './teamData';

function App() {
  const [teams, setTeams] = useState(Members)
  const handleValue = (event)=> {
    setTeams(event.target.value);
    console.log(teams)
  }
  const handleSubmit = event=> {
    event.preventDefault();
    console.log(teams)
  }
  return (
    <div className="App">
      <header className="App-header">
        { console.log('Add',teams)}
        <h1>{handleValue.teams}</h1>
      </header>
      <section>
      <form action="" onSubmit={event=>handleSubmit(event)}>
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
          <button>Add Members</button>
        </legend>
      </form>
      </section>
    </div>
  );
}

export default App;
