import React from 'react'
import { ImageViewer } from '../../Core/image-viewer/ImageViewer'
import styles from './about-two.module.css'

export const AboutTwo = () => {

    return (

        <div className={styles.aboutTwo}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1>Наши сильные стороны</h1>
                    <h2>Удобное расположение</h2>
                    <p>Склад находится на севере города, близко к развязке с КАД и к центру города.
                    Это позволяет минимизировать расходы на логистику и организовать распределительный
                    центр для внутригородских магазинов любой направленности.
                    </p>
                    <h2>Быстрый прием грузов
                    </h2>
                    <p>15 погрузочно-разгрузочных ворот, оснащённых док-леверами, позволяют
                    одновременно обрабатывать большое число машин.
                    </p>
                    <h2>Полный парк внутрискладской техники
                    </h2>
                    <p>Эксплуатация собственной техники минимизирует время простоя транспорта
                    клиентов, сокращая издержки на логистику.
                    </p>
                    <h2>Современная система управления складом
                    </h2>
                    <p>Складской учет ведется в собственной 1С, что гарантирует бесперебойную и надежную обработку грузов согласно Вашим требованиям, будь то FIFO, FEFO или LIFO.
                    </p>
                </div>

                <div className={styles.image}>
                    <ImageViewer>
                        <img src={'../../images/about/imgTwo.jpg'} alt="" />
                    </ImageViewer>
                </div>
            </div>
        </div>
    )
}