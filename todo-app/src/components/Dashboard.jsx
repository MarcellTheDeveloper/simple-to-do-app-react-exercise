import { useState } from 'react';
import Cards from './Cards.jsx';
import { v4 as uuidv4 } from 'uuid';

function Dashboard() {
  const [cards, setCards] = useState([]);

  const addCard = () => {
    setCards([...cards, { key: uuidv4() }]);
  };

  return (
    <div className='dashboard newItem'>
      <div>
        <input
          type='text'
          className='dashboardName'
          placeholder='Untitled dashboard'
        />
        <button className='addCardBtn' onClick={addCard}>
          +
        </button>
        <div>
          {cards.map((item) => (
            <Cards key={item.key} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
