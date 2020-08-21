import React from 'react'
import styles from './Section.module.scss'

const Section = (props) => {
    const { title, className, children } = props;
    const classes = className ? `${className} ${styles.container}`: styles.container;
    
    return <div className={classes}>
        { title  && <h2 className={styles.title}>{ title } </h2>}
        <div className={styles.content}>{ children }</div>
    </div>
}

export default Section