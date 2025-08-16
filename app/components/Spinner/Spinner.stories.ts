import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Spinner from './index';

const meta = {
    title: 'Components/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        color: { control: 'select', options: ['primary', 'secondary', 'white'] },
    },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        color: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        color: 'secondary',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
    },
};

export const WhiteOnDark: Story = {
    args: {
        color: 'white',
    },
    parameters: {
        backgrounds: { default: 'dark' },
    },
};
