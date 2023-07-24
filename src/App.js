import Buttons from "./components/Buttons";
import Table from "./components/Table";
import React, { useState } from 'react';
import * as satData from './satData.js';
import{banner} from './banner.js'
//importing banner from banner file
function App(){
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  return (
    <div>
      <Buttons  
         filterByType={filterByType}
     setSat={setSat}
     displaySats={displaySats}
   />
      <Table />
    {banner()}
//invoking banner function
    </div>
  );
}
const filterByType = (currentType) => {
  const displaySats = satData.filter((newSatDisplay) => {
     return newSatDisplay.orbitType === currentType;
  });
  setSat(displaySats);
};
export default App;
