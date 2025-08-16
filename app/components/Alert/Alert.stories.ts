import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Alert from './index';

const meta = {
    title: 'Components/Alert',
    component: Alert,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
    args: {
        type: 'info',
        children: '정보 알림입니다.',
    },
};

export const Success: Story = {
    args: {
        type: 'success',
        children: '성공 알림입니다.',
    },
};

export const Warning: Story = {
    args: {
        type: 'warning',
        children: '경고 알림입니다.',
    },
};

export const Error: Story = {
    args: {
        type: 'error',
        children: '에러 알림입니다.',
    },
};

export const WithCloseButton: Story = {
    args: {
        type: 'info',
        children: '닫기 버튼이 있는 알림입니다.',
        onClose: () => console.log('Alert closed'),
    },
};

export const LongContent: Story = {
    args: {
        type: 'info',
        children: '긴 내용의 알림입니다. 여러 줄의 텍스트가 있을 때도 잘 보이도록 합니다. 알림의 내용이 길어질 경우에도 레이아웃이 깨지지 않고 잘 유지되어야 합니다.',
    },
};
