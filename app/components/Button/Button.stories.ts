import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Button from './index';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'text'] },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    width: { control: 'select', options: ['auto', 'full'] },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    children: 'Text Button',
  },
};

// Sizes
export const Small: Story = {
  args: {
    size: 'small',
    children: 'Small Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    children: 'Medium Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Large Button',
  },
};

// Widths
export const AutoWidth: Story = {
  args: {
    width: 'auto',
    children: 'Auto Width Button',
  },
};

export const FullWidth: Story = {
  args: {
    width: 'full',
    children: 'Full Width Button',
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

// Combinations
export const LargeOutlineDisabled: Story = {
  args: {
    variant: 'outline',
    size: 'large',
    disabled: true,
    children: 'Large Outline Disabled',
  },
};

export const SmallSecondaryFullWidth: Story = {
  args: {
    variant: 'secondary',
    size: 'small',
    width: 'full',
    children: 'Small Secondary Full Width',
  },
};
