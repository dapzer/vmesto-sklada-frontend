import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Core/Layout '
import { Content } from '../components/Services/content/Content'
import { NavButtons } from '../components/Services/nav-buttons/NavButtons'
import { Main } from '../components/Services/main/Main'
import { CrossDoking } from '../components/Services/storage/CrossDoking'
import { ResponseStorage } from '../components/Services/storage/ResponseStorage'
import { Fulfillment } from '../components/Services/storage/Fulfillment'
import { Treatment } from '../components/Services/storage/Treatment'
import { OrderPicking } from '../components/Services/storage/OrderPicking'
import { CargoPacking } from '../components/Services/storage/CargoPacking'
import { PriceBtn } from '../components/Core/price-btn/PriceBtn'
import ReactMarkdown from "react-markdown";
import raw from "rehype-raw";

export default function Services({ services }) {

    const [serviceId, setServiceId] = useState(0)

    const [status, setStatus] = useState("responseStorage")

    const ContentSwitch = () => {
        switch (status) {
            case "responseStorage":
                return <ResponseStorage />
            case "crossDoking":
                return <CrossDoking />
            case "fulfillment":
                return <Fulfillment />
            case "treatment":
                return <Treatment />
            case "cargoPacking":
                return <CargoPacking />
            case "orderPicking":
                return <OrderPicking />
            default:
                return null;
        }
    }

    return (
        <Layout>
            <Head>
                <title>ВместоСклада | Услуги</title>
            </Head>
            <Main>
                <NavButtons setStatus={setStatus} services={services} setServiceId={setServiceId} />
                <Content>
                    <ReactMarkdown rehypePlugins={[raw]} key={services} children={services[serviceId].Description} />
                    {/* {ContentSwitch()} */}
                    <PriceBtn />
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