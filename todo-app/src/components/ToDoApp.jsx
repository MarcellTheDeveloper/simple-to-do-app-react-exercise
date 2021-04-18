import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import { v4 as uuidv4 } from 'uuid';
import LogoSvg from './LogoSvg.jsx';

function ToDoApp() {
  const [dash, setDash] = useState([<Dashboard key={uuidv4()} />]);
  //Item Add
  const addDash = () => {
    setDash([...dash, <Dashboard key={uuidv4()} />]);
  };
  //Item Remove
  const removeItem = (key) => {
    setDash((prevState) => [...prevState.filter((item) => item.key !== key)]);
  };

  //Theme Change
  const themeChange = () => {
    document.querySelector('#root').classList.toggle('themeChangeClr');
    document
      .querySelector('.themeChangeText')
      .classList.toggle('themeChangeTxtClr');
  };

  return (
    <div>
      <label id='themeChange' className='formSwitch'>
        <input type='checkbox' onChange={themeChange} />
        <i></i>
        <p className='themeChangeText'>Night mode</p>
      </label>
      <div className='dashBoardContainer'>
        {dash.map((singleDashboard) => {
          // if (singleDashboard === undefined) return undefined;
          return (
            <div key={singleDashboard.key}>
              <Dashboard />
              <div className='deleteDashBtnContainer'>
                <button
                  className='deleteDashBtn'
                  onClick={() => removeItem(singleDashboard.key)}
                >
                  <LogoSvg key={uuidv4()} />
                </button>
              </div>
            </div>
          );
        })}
        <div className='addDashBtn'>
          <input type='button' onClick={addDash} value='+ Add Dashboard ' />
        </div>
      </div>
    </div>
  );
}

export default ToDoApp;
