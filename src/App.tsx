import React from 'react';
import logo from './logo.svg';
import './App.css';
import {MyTextInput} from "./components/MyTextInput";
import {MyTextShow} from "./components/MyTextShow";


function App() {
  return (
      <div>
          <MyTextInput/>
          <MyTextShow/>
      </div>
  );
}

export default App;
