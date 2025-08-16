import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Pagination from './index';

const meta = {
    title: 'Components/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        currentPage: { control: { type: 'number', min: 1 } },
        totalPages: { control: { type: 'number', min: 1 } },
    },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        currentPage: 1,
        totalPages: 10,
    },
};

export const Small: Story = {
    args: {
        currentPage: 1,
        totalPages: 10,
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        currentPage: 1,
        totalPages: 10,
        size: 'large',
    },
};

export const ManyPages: Story = {
    args: {
        currentPage: 5,
        totalPages: 20,
    },
};

export const LastPage: Story = {
    args: {
        currentPage: 10,
        totalPages: 10,
    },
};
