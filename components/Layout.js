import styles from './Layout.module.css'

export default function ({ children }) {
  return <div className={styles.container}>{ children }</div>
}