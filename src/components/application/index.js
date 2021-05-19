import { useEffect } from 'react'
import { Header } from '../header'
import { Footer } from '../footer'
import styles from './styles.module.scss'

export const Application = ({ children }) => {
  useEffect(async () => {
    // init beacon
  }, [])

  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
