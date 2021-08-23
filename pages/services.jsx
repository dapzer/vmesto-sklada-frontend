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


export default function Services() {


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
                    {ContentSwitch()}
                    <PriceBtn url="/payment" text="Заказать расчёт" />
                </Content>
            </Main>
        </Layout>
    )
}
