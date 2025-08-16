import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Breadcrumb from './index';

const meta = {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        separator: { control: 'text' },
    },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            { label: '홈', href: '/' },
            { label: '카테고리', href: '/category' },
            { label: '현재 페이지' },
        ],
    },
};

export const CustomSeparator: Story = {
    args: {
        items: [
            { label: '홈', href: '/' },
            { label: '카테고리', href: '/category' },
            { label: '현재 페이지' },
        ],
        separator: '>',
    },
};

export const SingleItem: Story = {
    args: {
        items: [
            { label: '홈' },
        ],
    },
};

export const LongPath: Story = {
    args: {
        items: [
            { label: '홈', href: '/' },
            { label: '카테고리', href: '/category' },
            { label: '서브카테고리', href: '/category/sub' },
            { label: '상세카테고리', href: '/category/sub/detail' },
            { label: '현재 페이지' },
        ],
    },
};
