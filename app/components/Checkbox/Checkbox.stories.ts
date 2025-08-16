import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Checkbox from './index';

const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['primary', 'secondary', 'outline'] },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        disabled: { control: 'boolean' },
        checked: { control: 'boolean' },
        label: { control: 'text' },
        onChange: { action: 'changed' },
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: '기본 체크박스',
    },
};

export const Checked: Story = {
    args: {
        label: '선택된 체크박스',
        checked: true,
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        label: '보조 체크박스',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        label: '외곽선 체크박스',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        label: '작은 체크박스',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        label: '큰 체크박스',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        label: '비활성화 체크박스',
    },
};

export const DisabledChecked: Story = {
    args: {
        disabled: true,
        checked: true,
        label: '선택된 비활성화 체크박스',
    },
};