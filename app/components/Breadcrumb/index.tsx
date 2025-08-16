import React from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    className?: string;
    items: BreadcrumbItem[];
    separator?: string;
}

const Breadcrumb = ({ className, items, separator = '/' }: BreadcrumbProps) => {
    return (
        <nav className={classnames(style.breadcrumb, className)}>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <span className={style.item}>
                        {item.href ? (
                            <a href={item.href} className={style.link}>
                                {item.label}
                            </a>
                        ) : (
                            <span className={style.text}>{item.label}</span>
                        )}
                    </span>
                    {index < items.length - 1 && <span className={style.separator}>{separator}</span>}
                </React.Fragment>
            ))}
        </nav>
    );
};

export default Breadcrumb;
