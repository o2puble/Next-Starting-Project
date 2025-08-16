import React from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface ProgressProps {
    className?: string;
    value: number;
    max?: number;
    size?: 'small' | 'medium' | 'large';
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    showLabel?: boolean;
}

const Progress = ({ className, value, max = 100, size = 'medium', variant = 'primary', showLabel = false }: ProgressProps) => {
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    return (
        <div className={classnames(style.progressWrap, style[size], className)}>
            <div className={style.progressBar}>
                <div className={classnames(style.progressFill, style[variant])} style={{ width: `${percentage}%` }} />
            </div>
            {showLabel && <span className={style.label}>{Math.round(percentage)}%</span>}
        </div>
    );
};

export default Progress;
