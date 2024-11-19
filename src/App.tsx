import React, { useState } from 'react';
import { Button, Header, Modal, FormAddTask } from './components';
import './App.css';

function App() {
  const [addModal, setAddModal] = useState(false);

  return (
    <div className="App">
      <Header />
      <Modal name="add" open={addModal} onClose={() => setAddModal(false)}>
        <FormAddTask />
      </Modal>
      <Button
        type="button"
        click={() => setAddModal(true)}
        color="success"
        title="Ajouter une tâche"
        size="medium"
        shadow={true}
        className='floatingBtn'
      />
    </div>
  );
}

export default App;
