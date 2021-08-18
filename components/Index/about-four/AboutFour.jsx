import React from 'react'
import { ImageViewer } from '../../Core/image-viewer/ImageViewer'
import { PriceBtn } from '../../Core/price-btn/PriceBtn'
import styles from './about-four.module.css'

export const AboutFour = () => {

    return (
        <div className={styles.aboutFour}>
            <div className={styles.container}>
                <div className={styles.text}>
                    <h1>Принимаем любые грузы</h1>
                    <p>Если Ваш груз можно разместить на паллет любого типоразмера, он будет размещён на нашем складе. *За исключением опасных грузов и алкогольной продукции.</p>
                    <h1>Осуществляем кросс-докинг грузов</h1>
                    <p>Мы предлагаем полный комплекс услуг по кросс-докингу грузов: перегружаем любые типы грузов в одну машину или распределяем по нескольким для отправки в розничные магазины.</p>
                    <h1>Предлагаем к эксплуатации среднетемпературные холодильные камеры</h1>
                    <p>В нашем управлении так же есть среднетемпературные холодильные камеры, суммарной площадью до 3000 метров, для особых потребностей наших клиентов.</p>
                    <p>Остались вопросы? Звоните, мы всегда на связи!</p>
                    <PriceBtn />
                </div>

                <div className={styles.image}>
                    <ImageViewer>
                        <img src="./images/about/imgFour.jpeg" alt="" />
                    </ImageViewer>
                    
                </div>
            </div>
        </div>
    )
}
