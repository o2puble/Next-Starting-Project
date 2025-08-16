import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Radio from './index';

const meta = {
    title: 'Components/Radio',
    component: Radio,
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
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: '기본 라디오',
    },
};

export const Checked: Story = {
    args: {
        label: '선택된 라디오',
        checked: true,
    },
};

export const Small: Story = {
    args: {
        label: '작은 라디오',
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        label: '큰 라디오',
        size: 'large',
    },
};

export const Disabled: Story = {
    args: {
        label: '비활성화 라디오',
        disabled: true,
    },
};

export const DisabledChecked: Story = {
    args: {
        label: '선택된 비활성화 라디오',
        disabled: true,
        checked: true,
    },
};