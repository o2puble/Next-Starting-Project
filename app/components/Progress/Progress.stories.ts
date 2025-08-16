import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Progress from './index';

const meta = {
    title: 'Components/Progress',
    component: Progress,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: { control: { type: 'range', min: 0, max: 100 } },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        variant: { control: 'select', options: ['primary', 'secondary', 'success', 'warning', 'error'] },
        showLabel: { control: 'boolean' },
        max: { control: { type: 'range', min: 0, max: 100 } },
    },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 60,
    },
};

export const WithLabel: Story = {
    args: {
        value: 75,
        showLabel: true,
    },
};

export const Small: Story = {
    args: {
        value: 40,
        size: 'small',
        showLabel: true,
    },
};

export const Large: Story = {
    args: {
        value: 80,
        size: 'large',
        showLabel: true,
    },
};

export const Success: Story = {
    args: {
        value: 100,
        variant: 'success',
        showLabel: true,
    },
};

export const Warning: Story = {
    args: {
        value: 60,
        variant: 'warning',
        showLabel: true,
    },
};

export const Error: Story = {
    args: {
        value: 20,
        variant: 'error',
        showLabel: true,
    },
};

