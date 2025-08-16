import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Toast from './index';

const meta = {
    title: 'Components/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
        position: { control: 'select', options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'] },
        duration: { control: 'number' },
    },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
    args: {
        type: 'info',
        message: '정보 토스트입니다.',
        onClose: () => console.log('Toast closed'),
    },
};

export const Success: Story = {
    args: {
        type: 'success',
        message: '성공 토스트입니다.',
        onClose: () => console.log('Toast closed'),
    },
};

export const Warning: Story = {
    args: {
        type: 'warning',
        message: '경고 토스트입니다.',
        onClose: () => console.log('Toast closed'),
    },
};

export const Error: Story = {
    args: {
        type: 'error',
        message: '에러 토스트입니다.',
        onClose: () => console.log('Toast closed'),
    },
};

export const TopLeft: Story = {
    args: {
        type: 'info',
        message: '왼쪽 상단에 표시되는 토스트입니다.',
        position: 'top-left',
        onClose: () => console.log('Toast closed'),
    },
};

export const BottomLeft: Story = {
    args: {
        type: 'info',
        message: '왼쪽 하단에 표시되는 토스트입니다.',
        position: 'bottom-left',
        onClose: () => console.log('Toast closed'),
    },
};

export const LongDuration: Story = {
    args: {
        type: 'info',
        message: '오래 지속되는 토스트입니다.',
        duration: 10000,
        onClose: () => console.log('Toast closed'),
    },
};
