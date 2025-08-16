import React from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface TagProps {
    className?: string;
    children: React.ReactNode;
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
    size?: 'small' | 'medium' | 'large';
    closable?: boolean;
    onClose?: () => void;
}

const Tag = ({ className, children, variant = 'default', size = 'medium', closable = false, onClose }: TagProps) => {
    return (
        <span className={classnames(style.tag, style[variant], style[size], className)}>
            {children}
            {closable && (
                <button className={style.closeButton} onClick={onClose}>
                    ✕
                </button>
            )}
        </span>
    );
};

export default Tag;
