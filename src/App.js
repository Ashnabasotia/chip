import { useState } from 'react';
import CustomSelect from './custom-select';
import {userData} from './assets/UserData'

function App() {
    const [options, setOptions] = useState(userData);

  const handleChangeSelect = (e) => {
    console.log(e)
  }

  return (
    <div className="App">
      <CustomSelect
        options={options}
        placeHolder='Please select...'
        onChange={(e) => handleChangeSelect(e)}
        isSearchable
        isMulti
      />
    </div>
  );
}

export default App;