import React, { createContext, useContext, useState } from 'react'

const MyContext = createContext()

export  const useMyContext = () => {
    return useContext(MyContext)
}

const ContextProvider = props => {

    const [openModal, setOpenModal] = useState(false)

    const toggleModal = () => setOpenModal(!openModal)

    return (
        <MyContext.Provider value={{
            openModal,
            toggleModal,

        }}>
            {props.children}
        </MyContext.Provider>
    )
}

export default ContextProvider;