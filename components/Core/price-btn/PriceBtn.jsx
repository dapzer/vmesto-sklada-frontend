import React from 'react'
import styles from './price-btn.module.css'
import Link from 'next/link'

export const PriceBtn = ({url, text}) => {


    return (
        <div className={styles.container}>
            <Link href={url}>
                <a>{text}</a>
            </Link>
        </div>
    )
}
