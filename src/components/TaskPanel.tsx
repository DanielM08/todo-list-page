import styles from './TaskPanel.module.css';
import { PlusCircle } from 'phosphor-react';
import { EmptyList } from './EmptyList';
import { Task } from './Task';

export function TaskPanel() {
  return(
    <div>
      <form className={styles.addTaskForm}>
        <textarea 
          name='Criar'
          placeholder='Adicione uma nova tarefa'
        />
        
        <button type='submit'>
          Criar
          <PlusCircle size={18}/>
        </button>
      </form>


      <div className={styles.taskList}>
        <header>
          <div className={styles.createdTasksCounter} >
            <strong>Tarefas criadas</strong>
            <span>0</span>
          </div>

          <div className={styles.concludedTasksCounter}>
            <strong>Concluídas</strong>
            <span>2 de 5</span>
          </div>
        </header>
      </div>

      {/* <EmptyList /> */}
      <Task />
      <Task />
      <Task disabled={false}/>
      <Task disabled={false}/>
      <Task disabled={false}/>
    </div>
  );
}