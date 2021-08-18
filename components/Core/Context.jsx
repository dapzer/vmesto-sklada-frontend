import React, { createContext, useContext, useState } from 'react'

const MyContext = createContext()

export  const useMyContext = () => {
    return useContext(MyContext)
}

const ContextProvider = props => {

    // const [imgSrc, setimgSrc] = useState("")

    // const [showImg, setShowImg] = useState(false)

    // const imageViewer = event => {
    //     setimgSrc(event.target.src)
    //     setShowImg(true)
    // }

    const [openModal, setOpenModal] = useState(false)

    const toggleModal = () => setOpenModal(!openModal)

    return (
        <MyContext.Provider value={{
            openModal,
            toggleModal,
            // imageViewer,
            // imgSrc,
            // showImg,
            // setShowImg

        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default ContextProvider;