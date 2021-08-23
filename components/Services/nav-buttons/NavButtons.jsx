import React from 'react'
import styles from './nav-buttons.module.css'

export const NavButtons = ({ setStatus }) => {

    return (
        <div className={styles.main}>
            <button onClick={() => (setStatus("responseStorage"))}>Ответственное хранение</button>
            <button onClick={() => {setStatus("crossDoking")}}>Кросс-Докинг</button>
            <button onClick={() => {setStatus("fulfillment")}}>Фулфилмент</button>
            <button onClick={() => {setStatus("treatment")}}>Транспортная обработка грузов</button>
            <button onClick={() => {setStatus("cargoPacking")}}>Упаковка грузов</button>
            <button onClick={() => {setStatus("orderPicking")}}>Комплектация заказов</button>

        </div>
    )
}
