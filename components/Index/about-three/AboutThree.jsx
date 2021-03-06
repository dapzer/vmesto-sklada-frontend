import React from 'react'
import { ImageViewer } from "image-viewer-dv" 
import styles from './abot-three.module.css'

export const AboutThree = () => {

    return (
        <div>
            <div className={styles.aboutThree}>
                <div className={styles.container}>
                    <div className={styles.image}>
                        <ImageViewer>
                            <img src={'../../images/about/imgThree.jpg'} alt="" />
                        </ImageViewer>
                    </div>
                    <div className={styles.text}>
                        <h1>Команда профессионалов</h1>
                        <p>Наши рабочие - профессионалы высокого класса с многолетним стажем. Все роли четко распределены, поэтому мы осуществляем погрузку и выгрузку грузов максимально быстро.</p>
                        <h1>Эффективная коммуникация с клиентом</h1>
                        <p>Весь обмен информацией с клиентами осуществляется в электронном виде. Первичные документы мы отправляем через ЭДО, а различные рабочие отчеты посредством автоматической рассылки по электронной почте. Это сокращает расходы на бумагу, бережёт экологию и экономит Ваше время.</p>
                        <h1>Особый спектр услуг для розничных магазинов</h1>
                        <p>Помимо хранения, мы предлагаем услуги по управлению товарными остатками в Ваших торговых точках. Благодаря своевременным сигналам WMS системы в Вашем магазине всегда будет представлен максимальный ассортимент продукции, даже в периоды распродаж. Дополнительно мы оказываем услуги по прогнозированию спроса, предложению закупа популярных позиций и распродажи залежавшегося товара.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}