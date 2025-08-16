import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Tabs from './index';

const meta = {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['default', 'underline', 'contained'] },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        onChange: { action: 'changed' },
    },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultTabs = [
    { id: 'tab1', label: '첫 번째 탭' },
    { id: 'tab2', label: '두 번째 탭' },
    { id: 'tab3', label: '세 번째 탭' },
    { id: 'tab4', label: '비활성화 탭', disabled: true },
];

export const Default: Story = {
    args: {
        tabs: defaultTabs,
        activeTab: 'tab1',
        variant: 'default',
    },
};

export const Underline: Story = {
    args: {
        tabs: defaultTabs,
        activeTab: 'tab1',
        variant: 'underline',
    },
};

export const Contained: Story = {
    args: {
        tabs: defaultTabs,
        activeTab: 'tab1',
        variant: 'contained',
    },
};

export const Small: Story = {
    args: {
        tabs: defaultTabs,
        activeTab: 'tab1',
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        tabs: defaultTabs,
        activeTab: 'tab1',
        size: 'large',
    },
};

export const ManyTabs: Story = {
    args: {
        tabs: [
            { id: 'tab1', label: '탭 1' },
            { id: 'tab2', label: '탭 2' },
            { id: 'tab3', label: '탭 3' },
            { id: 'tab4', label: '탭 4' },
            { id: 'tab5', label: '탭 5' },
            { id: 'tab6', label: '탭 6' },
        ],
        activeTab: 'tab1',
    },
};