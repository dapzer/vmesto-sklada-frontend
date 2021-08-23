import React from "react";
import styles from "./about-one.module.css"
import { ImageViewer } from "../../Core/image-viewer/ImageViewer";

export const AboutOne = () => {

    return (
        <div id={"about"} className={styles.aboutOne}>
            <div className={styles.container}>
                <h1>О нас</h1>
                <div className={styles.items}>
                    <div className={styles.text}>
                        <p className={styles.unsetMargin}>Мы оказываем услуги по ответственному хранению грузов на сухом отапливаемом складе класса А, площадью 7000 метров, расположенным в черте города, в Калининском районе Санкт-Петербурга.</p>
                        <p>Складской комплекс оснащён всеми современными техническими средствами для оказания максимального комплекса услуг по обработке грузов.</p>
                        <p>Более 30 лет наша команда ведет успешную деятельность по введению в эксплуатацию складов различной площади, высотности и технического оснащения. Хранить грузы у нас - надежно и безопасно!</p>
                    </div>
                    <div className={styles.image}>
                        <ImageViewer>
                            <img src={"../../images/about/imgOne.jpg"} alt="" />
                        </ImageViewer>
                    </div>
                </div>
            </div>
        </div>

    )
}