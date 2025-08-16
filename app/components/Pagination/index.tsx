import React from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface PaginationProps {
    className?: string;
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    size?: 'small' | 'medium' | 'large';
}

const Pagination = ({ className, currentPage, totalPages, onPageChange, size = 'medium' }: PaginationProps) => {
    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
        let start = Math.max(1, currentPage - 2);
        let end = Math.min(totalPages, start + maxVisiblePages - 1);

        if (end - start + 1 < maxVisiblePages) {
            start = Math.max(1, end - maxVisiblePages + 1);
        }

        for (let i = start; i <= end; i++) {
            pages.push(
                <button key={i} className={classnames(style.pageButton, i === currentPage && style.active)} onClick={() => onPageChange(i)}>
                    {i}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className={classnames(style.pagination, style[size], className)}>
            <button className={style.pageButton} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                ←
            </button>
            {renderPageNumbers()}
            <button className={style.pageButton} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                →
            </button>
        </div>
    );
};

export default Pagination;
