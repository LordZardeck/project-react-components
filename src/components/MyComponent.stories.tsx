import React from 'react';
import {MyComponent} from './MyComponent';
import {Story} from '@storybook/react';
import {MyComponentProps} from './MyComponent.state';

export default {
    title: 'Example/MyComponent',
    component: MyComponent,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};

const Template: Story<MyComponentProps> = args => (
    <MyComponent counter={0} show={true} containerRef={() => {}} setShow={() => {}} {...args} />
);

export const Default = Template.bind({});
Default.args = {
    header: 'Counter',
};
