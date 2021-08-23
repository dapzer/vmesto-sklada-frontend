import React from 'react'
import styles from './main.module.css'

export const Main = props => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h6>Выберите интересующую вас услугу</h6>
                {props.children}
            </div>
        </div>
    )
}
