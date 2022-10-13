import styles from './Task.module.css';
import { Circle, CheckCircle, Trash } from 'phosphor-react';

interface TaskProps {
  disabled?: boolean;
}

export function Task({ disabled = true }: TaskProps) {
  return (
    <div className={styles.task}>
      <button type={"submit"} disabled={disabled} className={styles.check}>
        {disabled ? 
          <Circle size={17.45} color={'#4EA8DE'} /> : 
          <CheckCircle size={17.45} weight="fill" color={'#5E60CE'}/>
        }
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </button>

      <button className={styles.trash}>
        <Trash size={14} color={'#808080'} />
      </button>
    </div>
  );
}