import React, {useState} from 'react';
import {DynamicComponent} from './DynamicComponent';

const App = () => {
  const [selModal, setSelModal] = useState(null);

  const onSelChange = (val) => {
    if(val === 'modalA') {
      setSelModal({
        url: "http://localhost:3001/remoteEntry.js",
        scope: "modalA",
        module: "./Modal",
      });
    } else if(val === 'modalB') {
      setSelModal({
        url: "http://localhost:3002/remoteEntry.js",
        scope: "modalB",
        module: "./Modal",
      });
    }
  };

  return (
    <div>
      <h1>HOST APP</h1>
      Please select a remote modal to display:
      <select value={selModal?.scope || ''} onChange={e => {
        onSelChange(e.target.value)
      }}>
        <option value=""></option>
        <option value="modalA">modalA</option>
        <option value="modalB">modalB</option>
      </select>
      <div style={{
        marginTop: '20px'
      }}>
      <DynamicComponent meta={selModal} />
      </div>
    </div>
  );
};

export default App;