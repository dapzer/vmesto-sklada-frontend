import React from 'react'
import styles from './price-btn.module.css'
import Link from 'next/link'

export const PriceBtn = () => {
    return (
        <div className={styles.container}>
            <Link href={'/payment'}>
                <a>Заказать расчёт</a>
            </Link>
        </div>
    )
}
