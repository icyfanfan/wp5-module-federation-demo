import React, {useEffect, useState} from 'react';
import ModalA from 'modal-app-test-demo/modalA';

const App = () => {
  // const [ModalComponent, setModalComponent] = useState(null);
  // const [selModal, setSelModal] = useState('');

  // useEffect(() => {
  //   if(selModal === '') {
  //     setModalComponent(null);
  //     return;
  //   }
  //   const Modal = React.lazy(() => {
  //     // cannot use `template string` in import
  //     switch(selModal) {
  //       case 'modalA': return import('modal-app-test-demo/modalA');
  //       case 'modalB': return import('modal-app-test-demo/modalB');
  //     }
  //   });
  //   setModalComponent(Modal);
  // }, [selModal]);

  return (
    <div>
      <h1>HOST APP DEMO</h1>
      {/* Please select a remote modal to display: */}
      {/* <select value={selModal} onChange={e => {
        setSelModal(e.target.value)
      }}>
        <option value=""></option>
        <option value="modalA">modalA</option>
        <option value="modalB">modalB</option>
      </select>
      <div style={{
        marginTop: '20px'
      }}>
        {ModalComponent && (
          <React.Suspense fallback="Loading ModalA">
            <ModalComponent />
          </React.Suspense>
        )}
      </div> */}
      <ModalA />
    </div>
  );
};

export default App;