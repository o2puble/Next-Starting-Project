import React from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface CardProps {
    className?: string;
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    hoverable?: boolean;
    bordered?: boolean;
}

const Card = ({ className, children, title, subtitle, hoverable = false, bordered = true }: CardProps) => {
    return (
        <div className={classnames(style.card, hoverable && style.hoverable, bordered && style.bordered, className)}>
            {(title || subtitle) && (
                <div className={style.header}>
                    {title && <h3 className={style.title}>{title}</h3>}
                    {subtitle && <div className={style.subtitle}>{subtitle}</div>}
                </div>
            )}
            <div className={style.content}>{children}</div>
        </div>
    );
};

export default Card;
