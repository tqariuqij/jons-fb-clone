import React from 'react';
import './App.css';
import Feed from './Feed';
import Login from './Login';
import Sidebar from "./Sidebar";
import Widget from './Widget';
import { useStateValue } from './StateProvider'
import { Navbar } from './Navbar';

function App() {
  const [{ user }, dispatch ] = useStateValue();

  return (
    <div className="app">
      { ! user ? (<Login />) :(
      <>
        <Navbar />
        <div className= 'app__body'>
          <Sidebar />
          <Feed />
          <Widget />
        </div>
      </>
      ) }
      
    </div>
  );
}
 
export default App;
