import React from 'react'
import classnames from 'classnames'
import { VisuallyHidden } from '../../visually-hidden'
import styles from './styles.module.scss'

export const Page = ({ title = 'hic et nunc', children = null, large }) => {
  const classes = classnames({
    [styles.container]: true,
    [styles.large]: large,
  })
  // under false add title
  return (
    <main className={classes}>
      {false && (
        <div>
          {title !== '' ? (
            <title>hic et nunc - {title}</title>
          ) : (
            <title>hic et nunc</title>
          )}
        </div>
      )}
      <VisuallyHidden as="h1">{title}</VisuallyHidden>
      {children}
    </main>
  )
}
