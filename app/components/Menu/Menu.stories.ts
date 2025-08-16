import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Menu from './index';

const meta = {
    title: 'Components/Menu',
    component: Menu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['small', 'medium', 'large'] },
    },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
    { key: '1', label: '메뉴 항목 1' },
    { key: '2', label: '메뉴 항목 2' },
    { key: '3', label: '메뉴 항목 3' },
    { key: '4', label: '비활성화 항목', disabled: true },
];

export const Default: Story = {
    args: {
        items: defaultItems,
    },
};

export const Small: Story = {
    args: {
        items: defaultItems,
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        items: defaultItems,
        size: 'large',
    },
};

export const WithIcons: Story = {
    args: {
        items: [
            { key: '1', label: '홈', icon: '🏠' },
            { key: '2', label: '설정', icon: '⚙️' },
            { key: '3', label: '프로필', icon: '👤' },
            { key: '4', label: '로그아웃', icon: '🚪', disabled: true },
        ],
    },
};

export const ManyItems: Story = {
    args: {
        items: Array(8).fill(null).map((_, i) => ({
            key: String(i + 1),
            label: `메뉴 항목 ${i + 1}`,
        })),
    },
};
