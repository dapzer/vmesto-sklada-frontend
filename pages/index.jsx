import React, { useState, useEffect } from "react"
import Head from 'next/head'
import ReactResizeDetector from 'react-resize-detector'
import Layout from "../components/Core/Layout "
import { Main } from "../components/Index/main/Main"
import { AboutOne } from "../components/Index/about-one/AboutOne"
import { AboutTwo } from "../components/Index/about-two/AboutTwo"
import { AboutThree } from "../components/Index/about-three/AboutThree"
import { AboutFour } from "../components/Index/about-four/AboutFour"
import { WarehouseInfo } from "../components/Index/warehouse-info/WarehouseInfo"
import { Partners } from "../components/Index/partners/Partners"
import { Contacts } from "../components/Index/contacts/Contacts"
import { FixedMenu } from "../components/Index/fixed-menu/FixedMenu"

export default function Index({ posts }) {

    const [height, setHeight] = useState(0)

    const onResize = (widht, height) => {
        setHeight(height)
    }

    const [visible, setvisible] = useState(false)

    const listenScrollEvent = () => {
        window.scrollY > height / 2
            ? setvisible(true)
            : setvisible(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
    }, [height])

    return (

        <Layout>
            <Head>
                <title>ВместоСклада</title>
            </Head>
            <FixedMenu height={height} visible={visible} />
            <ReactResizeDetector onResize={onResize} handleHeight>
                <Main />
            </ReactResizeDetector>
            <AboutOne />
            <AboutTwo />
            <AboutThree />
            <AboutFour />
            <WarehouseInfo />
            <Partners />
            <Contacts />
        </Layout>
    )
}
