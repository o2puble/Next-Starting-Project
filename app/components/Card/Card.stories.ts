import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Card from './index';

const meta = {
    title: 'Components/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        hoverable: { control: 'boolean' },
        bordered: { control: 'boolean' },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: '카드 내용입니다.',
    },
};

export const WithTitle: Story = {
    args: {
        title: '카드 제목',
        children: '카드 내용입니다.',
    },
};

export const WithSubtitle: Story = {
    args: {
        title: '카드 제목',
        subtitle: '카드 부제목',
        children: '카드 내용입니다.',
    },
};

export const Hoverable: Story = {
    args: {
        title: '호버 가능한 카드',
        hoverable: true,
        children: '마우스를 올려보세요.',
    },
};

export const BorderlessCard: Story = {
    args: {
        title: '테두리 없는 카드',
        bordered: false,
        children: '테두리가 없는 카드입니다.',
    },
};

export const LongContent: Story = {
    args: {
        title: '긴 내용의 카드',
        children: Array(5).fill('긴 내용의 카드입니다. ').join(''),
    },
};
