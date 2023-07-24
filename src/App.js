import Buttons from "./components/Buttons";
import Table from "./components/Table";
import React  from 'react';
import * as satData from './satData.js';
import { banner } from './banner.js'; // Make sure this is the correct import statement

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(sat.map((data) => data.orbitType))];

  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
  };

  return (
    <>
    <Banner />
    <Buttons
      filterByType={filterByType}
      setSat={setSat}
      displaySats={displaySats}
    />
    <Table sat={sat} />
  </>
 
  );
}

export default App;
