import React, { useState, useEffect } from 'react';
import style from './style.module.scss';
import classnames from 'classnames';

interface Tab {
    id: string;
    label: string;
    disabled?: boolean;
}

interface TabsProps {
    className?: string;
    tabs: Tab[];
    activeTab?: string;
    onChange?: (tabId: string) => void;
    variant?: 'default' | 'underline' | 'contained';
    size?: 'small' | 'medium' | 'large';
}

const Tabs = ({ className, tabs, activeTab: externalActiveTab, onChange, variant = 'default', size = 'medium' }: TabsProps) => {
    const [internalActiveTab, setInternalActiveTab] = useState(externalActiveTab || tabs[0]?.id);

    useEffect(() => {
        if (externalActiveTab) {
            setInternalActiveTab(externalActiveTab);
        }
    }, [externalActiveTab]);

    const handleTabClick = (tabId: string) => {
        const tab = tabs.find((t) => t.id === tabId);
        if (!tab?.disabled) {
            setInternalActiveTab(tabId);
            onChange?.(tabId);
        }
    };

    return (
        <div className={classnames(style.tabsWrap, style[variant], style[size], className)}>
            {tabs.map((tab) => (
                <button key={tab.id} className={classnames(style.tab, internalActiveTab === tab.id && style.active, tab.disabled && style.disabled)} onClick={() => handleTabClick(tab.id)} disabled={tab.disabled}>
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
