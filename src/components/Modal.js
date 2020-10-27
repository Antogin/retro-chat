import React from "react";
import ReactDOM from "react-dom";

export const Modal = ({ children, closeModal, title }) => {
    const domEl = document.getElementById('modal-root')

    if (!domEl) return null

    const childrenWithProps = React.Children.map(children, child => {
        // checking isValidElement is the safe way and avoids a typescript error too
        const props = { closeModal };
        if (React.isValidElement(child)) {
            return React.cloneElement(child, props);
        }
        return child;
    });
    console.log(children)
    return ReactDOM.createPortal(
        <div className="dialog-shadow">
            <dialog className="nes-dialog is-rounded is-dark">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button onClick={closeModal} className="nes-btn is-error">
                        <i class="nes-icon close"></i>
                    </button>

                </div>

                <div className="modal-content">
                    {childrenWithProps}
                </div>
            </dialog>
        </div>,
        document.querySelector("#modal-root")
    );
};

