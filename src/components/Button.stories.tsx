import React from 'react';
import Button, {ButtonProps} from './Button';
import {Story} from '@storybook/react';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template: Story<ButtonProps> = (args: ButtonProps) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'My Button',
};
