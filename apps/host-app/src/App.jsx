import React, {useEffect, useState} from 'react';

const App = () => {
  const [ModalComponent, setModalComponent] = useState(null);
  const [selModal, setSelModal] = useState('');

  useEffect(() => {
    if(selModal === '') {
      setModalComponent(null);
      return;
    }
    const Modal = React.lazy(() => {
      // cannot use `template string` in import
      switch(selModal) {
        case 'modalA': return import('modalApp/modalA');
        case 'modalB': return import('modalApp/modalB');
      }
    });
    setModalComponent(Modal);
  }, [selModal]);

  return (
    <div>
      <h1>HOST APP</h1>
      Please select a remote modal to display:
      <select value={selModal} onChange={e => {
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
      </div>
    </div>
  );
};

export default App;