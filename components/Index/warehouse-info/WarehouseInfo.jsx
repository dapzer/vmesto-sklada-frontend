import React from 'react'
import styles from './warehouse-info.module.css'

export const WarehouseInfo = () => {

    return (
        <div className={styles.warehouseInfo}>
            <div className={styles.container}>
                <h1>Характеристики склада</h1>
                <div>
                    <h2>Тип склада:</h2>
                    <p>Тёплый, сухой, класс А.</p>
                </div>

                <div>
                    <h2>Площадь:</h2>
                    <p>7200 м./кв.</p>
                </div>

                <div>
                    <h2>Объём:</h2>
                    <p>11400 паллетомест.</p>
                </div>

                <div>
                    <h2>Стеллажная система:</h2>
                    <p>6 ярусов 10,4 м.</p>
                </div>

                <div>
                    <h2>Погрузо-разгрузочная техника:</h2>
                    <p>15 ед. Jungheinrich, 15 ед. доквеллеров DoorHan</p>
                </div>

                <div>
                    <h2>Максимальная нагрузка:</h2>
                    <p>10000 кг/м.кв.</p>
                </div>

                <div>
                    <h2>Минимальная температура:</h2>
                    <p>+10 С (Январь)</p>
                </div>

                <div>
                    <h2>Максимальная температура:</h2>
                    <p>+22 С (Июль)</p>
                </div>
                
                <div>
                    <h2>Относительная влажность:</h2>
                    <p>Не выше 60%</p>
                </div>
            </div>
            
        </div>
    )
}
