import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Badge from './index';

const meta = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error'] },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        rounded: { control: 'boolean' },
    },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'New',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Draft',
        variant: 'secondary',
    },
};

export const Success: Story = {
    args: {
        children: 'Completed',
        variant: 'success',
    },
};

export const Warning: Story = {
    args: {
        children: 'Pending',
        variant: 'warning',
    },
};

export const Error: Story = {
    args: {
        children: 'Failed',
        variant: 'error',
    },
};

export const Small: Story = {
    args: {
        children: '99+',
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        children: 'Large Badge',
        size: 'large',
    },
};

export const Rounded: Story = {
    args: {
        children: '12',
        rounded: true,
    },
};

export const WithLongText: Story = {
    args: {
        children: 'This is a very long badge text',
    },
};
