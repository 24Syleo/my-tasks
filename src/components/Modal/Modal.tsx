import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../../components';
import { IModal } from './Modal.interface';
import "./Modal.style.css";

const Modal = ({ name, open, children, onClose }: IModal) => {
    const [isVisible, setIsVisible] = useState(open);

    // Synchroniser l'état local avec la prop `open`
    useEffect(() => {
        setIsVisible(open);
    }, [open]);

    // Fermer le modal si on clique en dehors du contenu
    const handleClose = (evt: any) => {
        if (evt.target.id === "wrapper") {
            setIsVisible(false);
            onClose?.(); // Appeler la fonction onClose si définie
        }
    };

    // Contenu du modal
    const modal = (
        <div id="wrapper" onClick={handleClose} className="wrapper" datatype={name}>
            <div className="modal">
                <Button
                    type="button"
                    click={onClose}
                    color="danger"
                    title="X"
                    size="small"
                    shadow={false}
                    className='positionBtn'
                />
                <div className="modalContent">
                    {children}
                </div>
            </div>
        </div>
    );

    // Affichage conditionnel avec React Portal
    return isVisible ? ReactDOM.createPortal(modal, document.body) : null;
};

export default Modal;
