import React from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface MenuItem {
    key: string;
    label: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
}

interface MenuProps {
    className?: string;
    items: MenuItem[];
    size?: 'small' | 'medium' | 'large';
}

const Menu = ({ className, items, size = 'medium' }: MenuProps) => {
    return (
        <ul className={classnames(style.menu, style[size], className)}>
            {items.map((item) => (
                <li key={item.key}>
                    <button className={classnames(style.menuItem, item.disabled && style.disabled)} onClick={item.onClick} disabled={item.disabled}>
                        {item.icon && <span className={style.icon}>{item.icon}</span>}
                        <span className={style.label}>{item.label}</span>
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Menu;
