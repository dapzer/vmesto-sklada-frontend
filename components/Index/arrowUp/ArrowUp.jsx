import React from 'react'
import styles from './arrow-up.module.css'
import { goToTop  } from 'react-scrollable-anchor'

export const ArrowUp = () => {
    return (
        <div className={styles.arrowUp} onClick={goToTop}>
            <img src="./images/fixedMenu/arrow-up-solid.png" alt="" />
        </div>
    )
}
