import React, { InputHTMLAttributes, forwardRef } from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    className?: string;
    label?: string;
    error?: string;
    hint?: string;
    size?: 'small' | 'medium' | 'large';
    variant?: 'outline' | 'filled' | 'underline';
    fullWidth?: boolean;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, error, hint, size = 'medium', variant = 'outline', fullWidth = false, startAdornment, endAdornment, disabled = false, ...props }, ref) => {
    return (
        <div className={classnames(style.inputContainer, style[size], style[variant], fullWidth && style.fullWidth, disabled && style.disabled, error && style.error, className)}>
            {label && (
                <label className={style.label} htmlFor={props.id}>
                    {label}
                </label>
            )}
            <div className={style.inputWrapper}>
                {startAdornment && <div className={style.startAdornment}>{startAdornment}</div>}
                <input ref={ref} className={style.input} disabled={disabled} {...props} />
                {endAdornment && <div className={style.endAdornment}>{endAdornment}</div>}
            </div>
            {(error || hint) && <div className={classnames(style.message, error ? style.error : style.hint)}>{error || hint}</div>}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;
