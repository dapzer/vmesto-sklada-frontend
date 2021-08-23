import React from 'react'
import { ConnectionBtn } from "../connection-btn/ConnectionBtn"
import { ArrowUp } from '../arrowUp/ArrowUp';
import styles from "./fixed-menu.module.css";



export const FixedMenu = ({ height, visible }) => {

    return visible && (
        <div className={styles.main}>
            <ConnectionBtn />
            <ArrowUp />
        </div >

    )
}
