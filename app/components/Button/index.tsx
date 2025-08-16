import React from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface ButtonProps {
    className?: string;
    onClick?: () => void;
    children?: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    width?: 'auto' | 'full';
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
}

const Button = ({ className, onClick, children, size = 'medium', width = 'auto', disabled = false, variant = 'primary' }: ButtonProps) => {
    return (
        <button type="button" className={classnames(style.buttonWrap, style[size], style[width], style[variant], disabled && style.disabled, className)} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
