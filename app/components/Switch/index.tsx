import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface SwitchProps {
    className?: string;
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
}

const Switch = ({ className, label, checked: externalChecked = false, onChange, size = 'medium', disabled = false }: SwitchProps) => {
    const [internalChecked, setInternalChecked] = useState(externalChecked);

    useEffect(() => {
        setInternalChecked(externalChecked);
    }, [externalChecked]);

    const handleClick = () => {
        if (!disabled) {
            const newChecked = !internalChecked;
            setInternalChecked(newChecked);
            onChange?.(newChecked);
        }
    };

    return (
        <div className={classnames(style.switchWrap, style[size], disabled && style.disabled, className)} onClick={handleClick}>
            <div className={classnames(style.switch, internalChecked && style.checked)}>
                <div className={style.thumb} />
            </div>
            {label && <span className={style.label}>{label}</span>}
        </div>
    );
};

export default Switch;
