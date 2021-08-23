import React from 'react'
import styles from './main.module.css'

export const Main = () => {
    const selections = [
        {
            category: 'Груз',
            options: [
                { optionText: 'Укажите характер груза' },
                { optionText: 'Евро-паллета (80х120 см)' },
                { optionText: 'Негабаритный груз (свыше 80х120 см)' },
                { optionText: 'Другое (укажу в комментарии)' },
            ]
        },
        {
            category: 'Количество',
            options: [
                { optionText: 'Укажите количество' },
                { optionText: '10-30' },
                { optionText: '30-100' },
                { optionText: 'Более 100' },
            ],
        },
        {
            category: 'Срок',
            options: [
                { optionText: 'Укажите срок хранения' },
                { optionText: 'До 3 месяцев' },
                { optionText: 'До 6 месяцев' },
                { optionText: 'До 12 месяцев' },
                { optionText: 'Более 12 месяцев' },
                { optionText: 'Срок пока не определен' },
            ],
        },
        {
            category: 'Вид лица',
            options: [
                { optionText: 'Вид лица' },
                { optionText: 'Физическое' },
                { optionText: 'Юридическое' },
            ],
        }
    ]

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h2>Подайте заявку</h2>
                <p>Наш специалист рассчитает стоимость хранения и <br />
                    пришлет предложение в течение 1 часа</p>
                <div className={styles.line}></div>
                <form key={selections} action="https://formsubmit.co/danilavoronkov2002@gmail.com" method="POST" className={styles.mainForm}>

                    {selections.map((selection) =>
                        <div>
                            <h1>{selection.category}</h1>
                            <select name={selection.category} id="">
                                {selection.options && selection.options.map((option) =>
                                    <option value={option.optionText}>{option.optionText}</option>
                                )}
                            </select>
                        </div>
                    )}

                    <div>
                        <h1>Ваше имя</h1>
                        <input type="text" name="Имя" required />
                    </div>
                    <div>
                        <h1>Ваш e-mail</h1>
                        <input type="email" name="E-mail" required />
                    </div>
                    <div>
                        <h1>Номер телефона</h1>
                        <input type="tel" name="tel" required />
                    </div>
                    <div>
                        <h1>Комментарии</h1>
                        <textarea name="Комментарии"></textarea>
                    </div>

                    <div>
                        <button type="submit">Отправить</button>
                    </div>


                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://dapzer.github.io/nord-ovosh/" />
                </form>
            </div>
        </div>
    )
}
