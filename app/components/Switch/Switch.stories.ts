import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Switch from './index';

const meta = {
    title: 'Components/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        disabled: { control: 'boolean' },
        checked: { control: 'boolean' },
        label: { control: 'text' },
        onChange: { action: 'changed' },
    },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: '기본 스위치',
    },
};

export const Checked: Story = {
    args: {
        label: '켜진 스위치',
        checked: true,
    },
};

export const Small: Story = {
    args: {
        label: '작은 스위치',
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        label: '큰 스위치',
        size: 'large',
    },
};

export const Disabled: Story = {
    args: {
        label: '비활성화 스위치',
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: '켜진 비활성화 스위치',
        disabled: true,
        checked: true,
    },
};