import React from 'react'
import styles from './partners.module.css'

export const Partners = () => {
    return (
        <div className={styles.partners} id={"partners"}>
            <div className={styles.container}>
                <h1>Наши партнёры</h1>
                <div className={styles.content}>
                    <div className={styles.items}>
                        <img src="./images/partners/DE Lait.png" alt="" />
                        <img src="./images/partners/MasterLine.png" alt="" />
                        <img src="./images/partners/DV Traiding.png" alt="" />
                    </div>

                    <div className={`${styles.items} ${styles.midle}`}>
                        <img src="./images/partners/PolymerPro.png" alt="" />
                        <img src="./images/partners/DekoPro.png" alt="" />
                        <img src="./images/partners/TdRusichi.png" alt="" />
                        <img className={styles.mercury} src="./images/partners/Mercury.png" alt="" />
                    </div>

                    <div className={styles.items}>
                        <img src="./images/partners/Gazprombank.png" alt="" />
                        <img src="./images/partners/Gidrozo.png" alt="" />
                        <img src="./images/partners/EliteParkett.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
