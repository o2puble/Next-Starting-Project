import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Modal from './index';

const meta = {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        isOpen: { control: 'boolean' },
        title: { control: 'text' },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: true,
        title: '기본 모달',
        children: '모달 내용입니다.',
    },
};

export const Small: Story = {
    args: {
        isOpen: true,
        title: '작은 모달',
        size: 'small',
        children: '작은 크기의 모달입니다.',
    },
};

export const Large: Story = {
    args: {
        isOpen: true,
        title: '큰 모달',
        size: 'large',
        children: '큰 크기의 모달입니다.',
    },
};

export const WithoutTitle: Story = {
    args: {
        isOpen: true,
        children: '제목 없는 모달입니다.',
    },
};

export const LongContent: Story = {
    args: {
        isOpen: true,
        title: '긴 내용의 모달',
        children: Array(20).fill('긴 내용의 모달입니다. ').join(''),
    },
};
