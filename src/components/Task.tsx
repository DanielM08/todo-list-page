import styles from './Task.module.css';
import { Circle, CheckCircle, Trash } from 'phosphor-react';

interface ITask {
  content: string;
  concluded: boolean;
}

interface TaskProps {
  task: ITask;
  onDeleteTask: (task: ITask) => void;
  onTaskConcluded: (task: ITask) => void;
}

export function Task({ task, onDeleteTask, onTaskConcluded }: TaskProps) {
  
  function handleTaskConcluded(){
    onTaskConcluded(task);
  }

  function handleDeleteTask(){
    onDeleteTask(task);
  }

  return (
    <div className={styles.task}>
      <button 
        onClick={handleTaskConcluded}
        type={"submit"}
        disabled={task.concluded}
        className={styles.check}
      >
        {task.concluded ? 
          <CheckCircle size={17.45} weight="fill" color={'#5E60CE'}/> : 
          <Circle size={17.45} color={'#4EA8DE'} />
        }
        {task.content}
      </button>

      <button onClick={handleDeleteTask} className={styles.trash}>
        <Trash size={14} color={'#808080'} />
      </button>
    </div>
  );
}