import React, { useRef } from "react";
import styles from "./main.module.css";
import Slider from "../slider/slider"

export const Main = ({ref}) => {

    const targetRef = useRef(ref) 
    

    return (
        <div ref={targetRef} className={styles.sectionFirst}>
            <div className={styles.sectionFirstContainer}>
                <h1>Наш бизнес - управление товаропотоками!</h1>
                <p>Берем на аутсорсинг любые логистические операции Вашей компании. Предлагаем услуги по хранению и обработке габаритных и негабаритных грузов в складском комплексе, оснащенном всеми необходимыми техническими средствами. Осуществляем экспедицию грузов.</p>
                <Slider/>
            </div>
        </div>
    )
}