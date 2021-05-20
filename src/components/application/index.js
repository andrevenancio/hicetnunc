import { useEffect } from 'react'
// import { Header } from '../header'

export const Application = ({ children }) => {
  useEffect(async () => {
    // init beacon here
  }, [])

  return <div>{children}</div>
}
