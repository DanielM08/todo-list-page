import styles from './App.module.css'

import { Header } from './components/Header'
import { TaskPanel } from './components/TaskPanel'

import './global.css'

function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <TaskPanel />
      </div>
    </div>
  )
}

export default App
