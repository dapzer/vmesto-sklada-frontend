import React from 'react'
import styles from './image-viewer.module.css'
import { useViewer } from "../../Hooks/useViewer"

export const ImageViewer = (props) => {

    const { dontClose, closeViewer, show, showViewer } = useViewer()

    return (
        <>
            {
                (
                    <div onClick={showViewer} className={styles.imgBody}>
                        {props.children}
                    </div>
                )
            }

            {
                show && (
                    <div onClick={closeViewer} className={styles.body}>
                        <span className={styles.close} onClick={closeViewer}>×</span>
                        <div className={styles.imgShowBody} onClick={dontClose}>
                            {props.children}
                        </div>
                    </div>
                )
            }
        </>


    )
}
