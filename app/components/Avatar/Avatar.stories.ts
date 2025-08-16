import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Avatar from './index';

const meta = {
    title: 'Components/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        shape: { control: 'select', options: ['circle', 'square'] },
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
    args: {
        src: 'https://i.pravatar.cc/300',
        alt: 'User avatar',
    },
};

export const WithText: Story = {
    args: {
        text: 'JD',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        text: 'S',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        text: 'L',
    },
};

export const Square: Story = {
    args: {
        shape: 'square',
        text: 'SQ',
    },
};
