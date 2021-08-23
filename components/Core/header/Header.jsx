import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import { useMyContext } from "../Context"
import Link from "next/link";
import { LinksList } from "./LinksList";


export default function Header() {

    const [menuActive, setMenuActive] = useState(false)

    const burgerClose = (() => {
        setMenuActive(false)
    })

    const [headerColor, setHeaderColor] = useState(false)

    const listenScrollEvent = () => {
        window.scrollY > 70
            ? setHeaderColor(true)
            : setHeaderColor(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    }, [])

    const { toggleModal } = useMyContext()

    return (
        <div className={headerColor ? `${styles.sectionHeadContainerFixed} ${styles.sectionHeadContainer}` : styles.sectionHeadContainer}>
            <div className={menuActive ? `${styles.headerColorSwitch} ${styles.sectionHead}` : styles.sectionHead}>
                <h1><Link href={'/'}><a onClick={burgerClose} className={styles.logo}>ВместоСклада</a></Link></h1>
                <div className={menuActive ? `${styles.headerBurger} ${styles.active}` : styles.headerBurger} onClick={function () {
                    setMenuActive(!menuActive)
                }}>
                    <span></span>
                </div>
                <nav className={menuActive ? `${styles.headerMenu} ${styles.active}` : styles.headerMenu}>
                    <LinksList burgerClose={burgerClose} toggleModal={toggleModal} />
                </nav>
            </div>
        </div>
    )
}