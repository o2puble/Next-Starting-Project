import React from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: 'small' | 'medium' | 'large';
    shape?: 'circle' | 'square';
    text?: string;
}

const Avatar = ({ className, src, alt, size = 'medium', shape = 'circle', text }: AvatarProps) => {
    return <div className={classnames(style.avatar, style[size], style[shape], className)}>{src ? <img src={src} alt={alt || 'avatar'} className={style.image} /> : <span className={style.text}>{text || alt?.charAt(0).toUpperCase()}</span>}</div>;
};

export default Avatar;
