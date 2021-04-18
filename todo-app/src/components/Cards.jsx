import React, { useState, useEffect } from 'react';

function Cards() {
  const [showDesc, setShowDesc] = useState(false);
  const [writeDesc, setWriteDesc] = useState('');

  const hideCard = (e) => {
    e.target.parentElement.parentElement.remove();
  };

  return (
    <div className='textInp newItem'>
      <div className='cardTitleHolder'>
        <input className='cardTitle' type='text' placeholder='Name me!' />
        <button onClick={hideCard} style={{ zIndex: 9999 }}>
          x
        </button>
      </div>
      <div className='descHolder'>
        <label class='formSwitch'>
          <input type='checkbox' onChange={() => setShowDesc(!showDesc)} />
          <i></i>
          Description On/Off
        </label>
        {showDesc && (
          <div className='cardDesc'>
            <textarea
              className='inputClass'
              name=''
              id=''
              value={writeDesc}
              onChange={(e) => setWriteDesc(e.target.value)}
            ></textarea>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cards;
