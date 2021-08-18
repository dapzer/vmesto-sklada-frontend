import React from 'react'
import styles from './main.module.css'

export const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h2>Подайте заявку</h2>
                <p>Наш специалист рассчитает стоимость хранения и <br />
                    пришлет предложение в течение 1 часа</p>
                <div className={styles.line}></div>
                <form action="https://formsubmit.co/danilavoronkov2002@gmail.com" method="POST" className={styles.mainForm}>
                    <div>
                        <h1>Груз</h1>
                        <select name="Груз" id="">
                            <option value="Укажите характер груза">Укажите характер груза</option>
                            <option value="Евро-паллета (80х120 см)">Евро-паллета (80х120 см)</option>
                            <option value="Негабаритный груз (свыше 80х120 см)">Негабаритный груз (свыше 80х120 см)</option>
                            <option value="Другое (укажу в комментарии)">Другое (укажу в комментарии)</option>
                        </select>
                    </div>
                    <div>
                        <h1>Количество</h1>
                        <select name="Количество" id="">
                            <option value="Укажите количество">Укажите количество</option>
                            <option value="10-30">10-30</option>
                            <option value="30-100">30-100</option>
                            <option value="Более 100">Более 100</option>
                        </select>
                    </div>
                    <div>
                        <h1>Срок</h1>
                        <select name="Срок" id="">
                            <option value="Укажите срок хранения">Укажите срок хранения</option>
                            <option value="До 3 месяцев">До 3 месяцев</option>
                            <option value="До 6 месяцев">До 6 месяцев</option>
                            <option value="До 12 месяцев">До 12 месяцев</option>
                            <option value="Более 12 месяцев">Более 12 месяцев</option>
                            <option value="Срок пока не определен">Срок пока не определен</option>
                        </select>
                    </div>
                    <div>
                        <h1>Вид лица</h1>
                        <select name="Количество" id="">
                            <option value="Укажите количество">Вид лица</option>
                            <option value="Физическое">Физическое</option>
                            <option value="Юридическое">Юридическое</option>
                        </select>
                    </div>
                    <div>
                        <h1>Ваше имя</h1>
                        <input type="text" name="Имя" required/>
                    </div>
                    <div>
                        <h1>Ваш e-mail</h1>
                        <input type="email" name="E-mail" required/>
                    </div>
                    <div>
                        <h1>Номер телефона</h1>
                        <input type="tel" name="tel" className="tel" required/>
                    </div>
                    <div>
                        <h1>Комментарии</h1>
                        <textarea name="Комментарии"></textarea>
                    </div>

                    <div>
                        <button type="submit">Отправить</button>
                    </div>


                    <input type = "hidden" name = "_captcha" value = "false"/>
                    <input type = "hidden" name = "_next" value = "https://dapzer.github.io/nord-ovosh/"/>
                 </form>
            </div>
        </div>
    )
}
