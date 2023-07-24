
import React from 'react';
import satData from './satData';
//importing satDAta from satData

const Buttons = ({ displaySats, filterByType }) => {
  //only doing displaySats and filterByType(already imported satData)
  return (
    <div>
      {displaySats.map((sat, id) => (
        <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit

        </button>
        //updated first button  copied from book 
      ))}
      <button>{onClick}={() => setSat(satData)} All Orbits </button>
    </div>
    //needs to be outside of the map function 
  );
};

export default Buttons;
