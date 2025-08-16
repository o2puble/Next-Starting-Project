import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Input from './index';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['outline', 'filled', 'underline'] },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        disabled: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        type: { control: 'select', options: ['text', 'password', 'number', 'email', 'tel', 'search'] },
        label: { control: 'text' },
        placeholder: { control: 'text' },
        error: { control: 'text' },
        hint: { control: 'text' },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Outline: Story = {
    args: {
        variant: 'outline',
        label: 'Outline Input',
        placeholder: 'Type something...',
    },
};

export const Filled: Story = {
    args: {
        variant: 'filled',
        label: 'Filled Input',
        placeholder: 'Type something...',
    },
};

export const Underline: Story = {
    args: {
        variant: 'underline',
        label: 'Underline Input',
        placeholder: 'Type something...',
    },
};

// Sizes
export const Small: Story = {
    args: {
        size: 'small',
        label: 'Small Input',
        placeholder: 'Type something...',
    },
};

export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Medium Input',
        placeholder: 'Type something...',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Large Input',
        placeholder: 'Type something...',
    },
};

// States
export const WithError: Story = {
    args: {
        label: 'Input with Error',
        placeholder: 'Type something...',
        error: 'This field is required',
    },
};

export const WithHint: Story = {
    args: {
        label: 'Input with Hint',
        placeholder: 'Type something...',
        hint: 'Enter your username',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Disabled Input',
        placeholder: 'Type something...',
        disabled: true,
    },
};

// Types
export const Password: Story = {
    args: {
        type: 'password',
        label: 'Password Input',
        placeholder: 'Enter password...',
    },
};

export const Number: Story = {
    args: {
        type: 'number',
        label: 'Number Input',
        placeholder: 'Enter number...',
    },
};

export const Search: Story = {
    args: {
        type: 'search',
        label: 'Search Input',
        placeholder: 'Search...',
        startAdornment: '🔍',
    },
};

// Width
export const FullWidth: Story = {
    args: {
        label: 'Full Width Input',
        placeholder: 'Type something...',
        fullWidth: true,
    },
};

// With Adornments
export const WithAdornments: Story = {
    args: {
        label: 'Input with Adornments',
        placeholder: 'Type something...',
        startAdornment: '@',
        endAdornment: '.com',
    },
};
