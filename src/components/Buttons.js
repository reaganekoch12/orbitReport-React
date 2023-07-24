import React from 'react';

function Buttons({ filterByType, setSat, displaySats }) {
  return (
    <div>
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
        </button>
      ))}
      <button onClick={() => setSat([])}>All Satellites</button>
    </div>
  );
}

export default Buttons;

