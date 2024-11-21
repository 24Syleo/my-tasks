import { useState } from 'react';
import { IListTask } from './interface/Task.interface';
import { Button, Header, Modal, FormAddTask, ListTasks } from './components';
import './App.css';

function App() {
  const [addModal, setAddModal] = useState(false);
  const listTasks: IListTask = JSON.parse(localStorage.getItem('tasks') || '[]');

  return (
    <div className="App">
      <Header />
      <ListTasks list={listTasks} />
      <Modal name="add" open={addModal} onClose={() => setAddModal(false)}>
        <FormAddTask onClose={() => setAddModal(false)} />
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
