import React from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface BadgeProps {
    className?: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    size?: 'small' | 'medium' | 'large';
    rounded?: boolean;
}

const Badge = ({ className, children, variant = 'primary', size = 'medium', rounded = false }: BadgeProps) => {
    return <span className={classnames(style.badge, style[variant], style[size], rounded && style.rounded, className)}>{children}</span>;
};

export default Badge;
