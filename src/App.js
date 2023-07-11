import Buttons from "./components/Buttons";
import Table from "./components/Table";

import{banner} from '/.banner.js'
//importing banner from banner file
function App() {
  return (
    <div>
      <Buttons />
      <Table />
    {banner()}
//invoking banner function
    </div>
  );
}

export default App;
