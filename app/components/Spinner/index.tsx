import React from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface SpinnerProps {
    className?: string;
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'secondary' | 'white';
}

const Spinner = ({ className, size = 'medium', color = 'primary' }: SpinnerProps) => {
    return <div className={classnames(style.spinner, style[size], style[color], className)} />;
};

export default Spinner;
