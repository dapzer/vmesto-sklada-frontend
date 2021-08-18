import React from 'react'
import styles from "./connaction-btn.module.css";
import { useMyContext } from "../../Core/Context"

export const ConnectionBtn = () => {
    
    const {toggleModal} = useMyContext()

    return (
        <div>
            <a className={styles.mobailIcon} onClick={toggleModal}>
                <i>
                    <img src="/images/fixedMenu/phone-number.png" alt=""/>
                </i>
                <p>
                    Заказать звонок
                </p>
            </a>
        </div>
    )
}
