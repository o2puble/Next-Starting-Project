import React, { useState, useRef, useEffect } from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

interface SelectProps {
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    className?: string;
    label?: string;
    error?: string;
    hint?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'outline' | 'filled' | 'underline';
    fullWidth?: boolean;
    placeholder?: string;
    disabled?: boolean;
}

const Select = ({ options, value: externalValue, onChange, className, label, error, hint, size = 'medium', variant = 'outline', fullWidth = false, placeholder = '선택해주세요', disabled = false }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(externalValue);
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setInternalValue(externalValue);
    }, [externalValue]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const selectedOption = options.find((option) => option.value === internalValue);

    const handleSelect = (option: SelectOption) => {
        if (!disabled && !option.disabled) {
            setInternalValue(option.value);
            onChange?.(option.value);
            setIsOpen(false);
        }
    };

    return (
        <div ref={selectRef} className={classnames(style.selectContainer, style[size], style[variant], fullWidth && style.fullWidth, disabled && style.disabled, error && style.error, className)}>
            {label && <label className={style.label}>{label}</label>}
            <div className={classnames(style.select, isOpen && style.open)} onClick={() => !disabled && setIsOpen(!isOpen)}>
                <div className={style.value}>{selectedOption ? selectedOption.label : placeholder}</div>
                <div className={classnames(style.arrow, isOpen && style.open)}>▼</div>
            </div>
            {isOpen && (
                <div className={style.options}>
                    {options.map((option) => (
                        <div key={option.value} className={classnames(style.option, option.value === internalValue && style.selected, option.disabled && style.disabled)} onClick={() => handleSelect(option)}>
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
            {(error || hint) && <div className={classnames(style.message, error ? style.error : style.hint)}>{error || hint}</div>}
        </div>
    );
};

export default Select;
