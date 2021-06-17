import './App.css';
import React from 'react'
import Meeting from './Meeting'
import Login from './Login';
function App(){
  return (
    <div className="App">
       <ul className='k'>
       <button className="hello">Logout</button>
      </ul>
     
   <h1>Meeting Room Booking</h1>
   
     <Meeting />
     <Login></Login>
    </div>
  );
 }


export default App;
