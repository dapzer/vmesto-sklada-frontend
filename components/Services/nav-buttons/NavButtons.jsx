import React from 'react'
import styles from './nav-buttons.module.css'

export const NavButtons = ({ setStatus, services, setServiceId }) => {

    const change = (id) => {
        setServiceId(services.map((service) => { return service.id; }).indexOf(id))
    }

    return (
        <div className={styles.main}>
            <button onClick={() => (setStatus("responseStorage"))}>Ответственное хранение</button>
            <button onClick={() => {setStatus("crossDoking")}}>Кросс-Докинг</button>
            <button onClick={() => {setStatus("fulfillment")}}>Фулфилмент</button>
            <button onClick={() => {setStatus("treatment")}}>Транспортная обработка грузов</button>
            <button onClick={() => {setStatus("cargoPacking")}}>Упаковка грузов</button>
            <button onClick={() => {setStatus("orderPicking")}}>Комплектация заказов</button>

            {services && services.map((service) => service.Show && (
                <div key={service.id}>
                    <button  onClick={() => change(service.id)}>{service.Service}</button>
                </div>
            ))}
        </div>
    )
}
