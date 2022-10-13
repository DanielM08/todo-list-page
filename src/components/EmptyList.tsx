import styles from './EmptyList.module.css';
import { Clipboard } from 'phosphor-react';

export function EmptyList() {
  return (
    <div className={styles.empty}>
      <Clipboard size={56}/>
      <text>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <text>Crie tarefas e organize seus itens a fazer</text>
      </text>
    </div>
  )
}