import React, { useState } from 'react'

import { Modal } from './../components/Modal'

export const useModal = () => {
    const [isVisible, setIsVisible] = useState(false)

    const showModal = () => setIsVisible(true)
    const hideModal = () => setIsVisible(false)

    const RenderModal = ({ children, title }) => (
        <React.Fragment>
            {isVisible && <Modal title={title} closeModal={hideModal}>{children}</Modal>}
        </React.Fragment>
    )

    return {
        showModal,
        hideModal,
        RenderModal,
    }
}