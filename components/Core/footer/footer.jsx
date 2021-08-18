import React from "react";
import styles from "./footer.module.css"


export default function Footer() {
    return(
        <React.Fragment>

            <div className={styles.mainFooter}>
                <div className={styles.footerContainer}>
                    <h1>ООО «ЛОГИСТИКА-36» | ОГРНИП: 1167847141550 | ИНН: 7804561471 | КПП: 780401001</h1>
                    <div className={styles.footerLine}></div>
                    <p>2021 designed and created by Данила Воронков <br/> Telegram: @Dapzer</p>
                </div>
            </div>

        </React.Fragment>
    )
}