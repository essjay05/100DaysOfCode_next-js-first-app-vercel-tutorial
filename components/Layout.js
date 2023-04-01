import styles from './Layout.module.scss'

export default function ({ children }) {
  return <div className={styles.container}>{ children }</div>
}