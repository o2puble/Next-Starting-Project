import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface CheckboxProps {
    className?: string;
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'outline';
}

const Checkbox = ({ className, label, checked: externalChecked = false, onChange, size = 'medium', disabled = false, variant = 'primary' }: CheckboxProps) => {
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
        <div className={classnames(style.checkboxWrap, style[size], style[variant], disabled && style.disabled, className)} onClick={handleClick}>
            <div className={classnames(style.checkbox, style[size], style[variant], internalChecked && style.checked)}>
                {internalChecked && (
                    <svg className={style.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                )}
            </div>
            {label && <span className={style.label}>{label}</span>}
        </div>
    );
};

export default Checkbox;
