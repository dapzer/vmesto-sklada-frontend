import React from 'react'
import styles from "./contact-modal.module.css"
import { useMyContext } from "../Context"

export const ContactModal = () => {

    const {toggleModal, openModal} = useMyContext()

    const dontClose = (event) => {
        event.stopPropagation()
    }

    return openModal && ( 
        <div className={styles.body} onClick={toggleModal}>
            <div className={styles.modal} onClick={dontClose}>
                <form action="https://formsubmit.co/danilavoronkov2002@gmail.com" method="POST">
                    <h1>Ваше имя</h1>
                    <input type="text" name="Имя" required/>
                    <h1>Ваш e-mail</h1>
                    <input type="email" name="E-mail" required/>
                    <h1>Ваша организация</h1>
                    <input type="company" name="Компания" required/>
                    <h1>Ваш вопрос</h1>
                    <textarea name="Вопрос"></textarea>

                    <div>
                        <button className={styles.formBtn} type="submit">Отправить</button>
                    </div>

                    <input type = "hidden" name = "_captcha" value = "false"/>
                    <input type = "hidden" name = "_next" value = "https://dapzer.github.io/nord-ovosh/"/>
                </form>
                <button className={styles.close} onClick={toggleModal}></button>
            </div>
        </div>
    )
}
