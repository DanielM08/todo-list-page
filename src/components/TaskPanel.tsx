import styles from './TaskPanel.module.css';
import { PlusCircle } from 'phosphor-react';
import { EmptyList } from './EmptyList';
import { Task } from './Task';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface ITask {
  content: string;
  concluded: boolean;
}

export function TaskPanel() {

  const [taskList, setTaskList] = useState([] as ITask[]);
  const [newTaskText, setNewTaskText] = useState('');

  const [numConcludedTasks, setNumConcludedTasks] = useState(0);

  function handleCreateNewTask(event: FormEvent){
    event.preventDefault()

    const newTask = {
      content: newTaskText,
      concluded: false,
    }
    setTaskList([...taskList, newTask]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  function deleteTask(task: ITask){
    const taskListWithoutDeletedOne = taskList.filter(t => t.content !== task.content);
    setTaskList([...taskListWithoutDeletedOne]);

    if(task.concluded){
      setNumConcludedTasks(numConcludedTasks - 1);
    }
  }

  function concludeTask(task: ITask){
    const taskListWithConcludedOne = taskList.map(t => {
      if(t.content === task.content){
        t.concluded = !task.concluded;
      }
      return t;
    });

    setTaskList([...taskListWithConcludedOne]);
    setNumConcludedTasks(numConcludedTasks + 1);
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return(
    <div>
      <form onSubmit={handleCreateNewTask} className={styles.addTaskForm}>
        <textarea 
          name='Criar'
          placeholder='Adicione uma nova tarefa'
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        
        <button type='submit' disabled={isNewTaskEmpty}>
          Criar
          <PlusCircle size={18}/>
        </button>
      </form>


      <div className={styles.taskList}>
        <header>
          <div className={styles.createdTasksCounter} >
            <strong>Tarefas criadas</strong>
            <span>{taskList.length}</span>
          </div>

          <div className={styles.concludedTasksCounter}>
            <strong>Concluídas</strong>
            <span>{`${numConcludedTasks} de ${taskList.length}`}</span>
          </div>
        </header>
      </div>

      <div>
        {
          taskList.length === 0 ? <EmptyList /> :
          taskList.map(t => 
            <Task 
              key = {t.content}
              task = {t}
              onDeleteTask = {deleteTask}
              onTaskConcluded = {concludeTask}
            />  
          )
        }
      </div>
    </div>
  );
}