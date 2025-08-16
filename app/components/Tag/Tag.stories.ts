import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Tag from './index';

const meta = {
    title: 'Components/Tag',
    component: Tag,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['default', 'primary', 'success', 'warning', 'error'] },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        closable: { control: 'boolean' },
    },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '기본 태그',
    },
};

export const Primary: Story = {
    args: {
        children: '주요 태그',
        variant: 'primary',
    },
};

export const Success: Story = {
    args: {
        children: '성공 태그',
        variant: 'success',
    },
};

export const Warning: Story = {
    args: {
        children: '경고 태그',
        variant: 'warning',
    },
};

export const Error: Story = {
    args: {
        children: '에러 태그',
        variant: 'error',
    },
};

export const Small: Story = {
    args: {
        children: '작은 태그',
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        children: '큰 태그',
        size: 'large',
    },
};

export const Closable: Story = {
    args: {
        children: '닫기 가능한 태그',
        closable: true,
        onClose: () => console.log('Tag closed'),
    },
};
