import React from 'react';
import Item from './Item';
import './Style/Style.scss'
import {data} from './Data/AccardionData'

function App() {
  return (
    <div className="App">
      <ul className='card'>
        {
          data.map((card) => (
              <Item key={card.id} card={card}  />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
