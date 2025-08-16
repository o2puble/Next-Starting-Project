import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Select from './index';

const meta = {
    title: 'Components/Select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'select', options: ['outline', 'filled', 'underline'] },
        size: { control: 'select', options: ['small', 'medium', 'large'] },
        disabled: { control: 'boolean' },
        fullWidth: { control: 'boolean' },
        placeholder: { control: 'text' },
        label: { control: 'text' },
        error: { control: 'text' },
        hint: { control: 'text' },
        onChange: { action: 'changed' },
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
    { value: 'option1', label: '옵션 1' },
    { value: 'option2', label: '옵션 2' },
    { value: 'option3', label: '옵션 3' },
    { value: 'option4', label: '옵션 4', disabled: true },
    { value: 'option5', label: '옵션 5' },
];

export const Default: Story = {
    args: {
        options: defaultOptions,
        label: '기본 셀렉트',
    },
};

export const WithValue: Story = {
    args: {
        options: defaultOptions,
        label: '값이 있는 셀렉트',
        value: 'option2',
    },
};

export const Filled: Story = {
    args: {
        options: defaultOptions,
        label: '채워진 셀렉트',
        variant: 'filled',
    },
};

export const Underline: Story = {
    args: {
        options: defaultOptions,
        label: '밑줄 셀렉트',
        variant: 'underline',
    },
};

export const Small: Story = {
    args: {
        options: defaultOptions,
        label: '작은 셀렉트',
        size: 'small',
    },
};

export const Large: Story = {
    args: {
        options: defaultOptions,
        label: '큰 셀렉트',
        size: 'large',
    },
};

export const WithError: Story = {
    args: {
        options: defaultOptions,
        label: '에러가 있는 셀렉트',
        error: '필수 항목입니다',
    },
};

export const WithHint: Story = {
    args: {
        options: defaultOptions,
        label: '힌트가 있는 셀렉트',
        hint: '옵션을 선택해주세요',
    },
};

export const Disabled: Story = {
    args: {
        options: defaultOptions,
        label: '비활성화 셀렉트',
        disabled: true,
    },
};

export const FullWidth: Story = {
    args: {
        options: defaultOptions,
        label: '전체 너비 셀렉트',
        fullWidth: true,
    },
};