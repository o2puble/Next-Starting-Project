import React, { useEffect } from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface ToastProps {
    className?: string;
    type?: 'info' | 'success' | 'warning' | 'error';
    message: string;
    duration?: number;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    onClose: () => void;
}

const Toast = ({ className, type = 'info', message, duration = 3000, position = 'bottom-right', onClose }: ToastProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className={classnames(style.toast, style[type], style[position], className)}>
            <div className={style.message}>{message}</div>
            <button className={style.closeButton} onClick={onClose}>
                ✕
            </button>
        </div>
    );
};

export default Toast;
