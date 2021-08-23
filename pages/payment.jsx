import React from 'react'
import Head from 'next/head'
import Layout from '../components/Core/Layout '
import { Main } from '../components/Payment/main/Main'

export default function  Payment () {

    return (
        <Layout>
            <Head>
                <title>ВместоСклада | Заказать расчёт</title>
            </Head>
            <Main />
        </Layout>
    )
}

