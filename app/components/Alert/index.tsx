import React from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface AlertProps {
    className?: string;
    type?: 'info' | 'success' | 'warning' | 'error';
    children: React.ReactNode;
    onClose?: () => void;
}

const Alert = ({ className, type = 'info', children, onClose }: AlertProps) => {
    return (
        <div className={classnames(style.alert, style[type], className)}>
            <div className={style.content}>{children}</div>
            {onClose && (
                <button className={style.closeButton} onClick={onClose}>
                    ✕
                </button>
            )}
        </div>
    );
};

export default Alert;
