import { useState } from 'react';
import { IListTask } from './interface/Task.interface';
import { Button, Header, Modal, FormAddTask, ListTasks } from './components';
import './App.css';

function App() {
  const [listTasks, setListTasks] = useState<IListTask>(
    JSON.parse(localStorage.getItem('tasks') || '{"tasks": []}')
  );
  const [addModal, setAddModal] = useState(false);

  const updateTasks = (tasks: IListTask) => {
    setListTasks(tasks); // Update local state
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Sync with localStorage
  };

  return (
    <div className="App">
      <Header />
      {
        listTasks.tasks.length === 0 ? (
          <h3>Null</h3>
        ) : (
          <ListTasks list={listTasks} updateTasks={updateTasks} />
        )
      }
      <Modal name="add" open={addModal} onClose={() => setAddModal(false)}>
        <FormAddTask onClose={() => setAddModal(false)} updateTasks={updateTasks} />
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
