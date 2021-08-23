import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Core/Layout '
import { Content } from '../components/Services/content/Content'
import { NavButtons } from '../components/Services/nav-buttons/NavButtons'
import { Main } from '../components/Services/main/Main'
import { PriceBtn } from '../components/Core/price-btn/PriceBtn'
import ReactMarkdown from "react-markdown";
import raw from "rehype-raw";

export default function Services({ services }) {

    const [serviceId, setServiceId] = useState(0)


    return (
        <Layout>
            <Head>
                <title>ВместоСклада | Услуги</title>
            </Head>
            <Main>
                <NavButtons services={services} setServiceId={setServiceId} />
                <Content>
                    <ReactMarkdown rehypePlugins={[raw]} key={services} children={services[serviceId].Description} />
                    <PriceBtn url="/payment" text="Заказать расчёт" />
                </Content>
            </Main>
        </Layout>
    )
}

export async function getStaticProps(context) {
    
    const res = await fetch("http://localhost:1337/services?_sort=id&Show_eq=true")
    const services = await res.json()

    return {
        props: { services }, // will be passed to the page component as props
    }
}