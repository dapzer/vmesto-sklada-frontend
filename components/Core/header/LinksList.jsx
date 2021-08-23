import React from 'react'
import Link from "next/link";
import { PriceBtn } from "../price-btn/PriceBtn";


export const LinksList = ({burgerClose, toggleModal}) => {
    return (
        <ul>
            <li><Link href={"/#about"}><a onClick={burgerClose}>О нас</a></Link></li>
            <li><Link href={'/services'}><a onClick={burgerClose}>Услуги</a></Link></li>
            <li><Link href={"/#partners"}><a onClick={burgerClose}>Наши партнёры</a></Link></li>
            <li><Link href={"/#contacts"}><a onClick={burgerClose}>Контакты</a></Link></li>
            <li onClick={burgerClose}><a onClick={toggleModal}>Обратная связь</a></li>
            <li><PriceBtn url="/payment" text="Заказать расчёт" /></li>
        </ul>
    )
}
