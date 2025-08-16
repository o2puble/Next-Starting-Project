import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface RadioProps {
    className?: string;
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    name?: string;
}

const Radio = ({ className, label, checked: externalChecked = false, onChange, size = 'medium', disabled = false, name }: RadioProps) => {
    const [internalChecked, setInternalChecked] = useState(externalChecked);

    useEffect(() => {
        setInternalChecked(externalChecked);
    }, [externalChecked]);

    const handleClick = () => {
        if (!disabled && !internalChecked) {
            setInternalChecked(true);
            onChange?.(true);
        }
    };

    return (
        <div className={classnames(style.radioWrap, style[size], disabled && style.disabled, className)} onClick={handleClick}>
            <input type="radio" className={style.radio} checked={internalChecked} onChange={() => {}} disabled={disabled} name={name} />
            {label && <span className={style.label}>{label}</span>}
        </div>
    );
};

export default Radio;
