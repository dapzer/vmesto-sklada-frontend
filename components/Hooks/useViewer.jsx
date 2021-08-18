import { useState } from 'react'

export const useViewer = () => {


    const [show, setShow] = useState(false)

    const showViewer = () => {
        setShow(true)
    }

    const dontClose = (event) => {
        event.stopPropagation()
    }

    const closeViewer = () => {
        setShow(false)
    }


    return {
        show,
        showViewer,
        dontClose,
        closeViewer,

    }
}
