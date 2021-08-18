import React from 'react'
import styles from './contacts.module.css'

export const Contacts = () => {
    return (
        <div className={styles.contacts} id={"contacts"}>
            <div className={styles.container}>
                <h2>Контакты</h2>
                <div className={styles.content}>
                    <div>
                        <h1>Телефон:</h1>
                        <p>+7 (921) 939-94-81</p>
                        <p>+7 (812) 299-94-49</p>
                        <h1>Эл. Почта:</h1>
                        <p>Info@vmestosklada.ru</p>
                        <h1>Адрес:</h1>
                        <p className={styles.last}>пр. Непокорённых, 63 корпус 36, Санкт-Петербург, 195067</p>
                    </div>

                    <div>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3990.911137278713!2d30.416013317376322!3d59.99093899999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963252dadadfa9%3A0x8fbb6700b7c0df81!2z0L_RgC4g0J3QtdC_0L7QutC-0YDRkdC90L3Ri9GFLCA2MyDQutC-0YDQv9GD0YEgMzYsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTUwNjc!5e0!3m2!1sru!2sru!4v1617227293644!5m2!1sru!2sru" allowFullScreen="" loading="lazy"></iframe>
                    </div>
                </div>

            </div>

        </div>
    )
}