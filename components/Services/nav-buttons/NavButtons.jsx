import React from 'react'
import styles from './nav-buttons.module.css'

export const NavButtons = ({ services, setServiceId }) => {

    const change = (id) => {
        setServiceId(services.map((service) => { return service.id; }).indexOf(id))
    }

    return (
        <div className={styles.main}>
            {services && services.map((service) => service.Show && (
                <div key={service.id}>
                    <button  onClick={() => change(service.id)}>{service.Service}</button>
                </div>
            ))}
        </div>
    )
}
