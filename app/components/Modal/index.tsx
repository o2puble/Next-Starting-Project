import React from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
}

const Modal = ({ className, isOpen, onClose, title, children, size = 'medium' }: ModalProps) => {
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={style.backdrop} onClick={handleBackdropClick}>
            <div className={classnames(style.modal, style[size], className)}>
                <div className={style.header}>
                    {title && <h2 className={style.title}>{title}</h2>}
                    <button className={style.closeButton} onClick={onClose}>
                        ✕
                    </button>
                </div>
                <div className={style.content}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
