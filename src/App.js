import React, { useState } from 'react';
import Banner from './Banner';
import Buttons from './Buttons';
import Table from './Table';
import satData from './satData';

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };

  return (
    <div>
      <Banner />
      <Buttons filterByType={filterByType} setSat={setSat} displaySats={displaySats} />
      <Table sat={sat} />
    </div>
  );
}

export default App;

