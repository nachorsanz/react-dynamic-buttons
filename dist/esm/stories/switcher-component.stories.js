import React from 'react';
import Switcher from '../ui/switcher-component/switcher';
export default {
    title: 'Dynamic React Components/Components/Switcher',
    component: Switcher,
    argTypes: {
        size: {
            control: {
                type: 'radio',
                options: ['small', 'medium', 'large'],
            },
        },
        variant: {
            control: {
                type: 'radio',
                options: [
                    'primary',
                    'secondary',
                    'tertiary',
                    'danger',
                    'success',
                    'warning',
                    'info',
                    'light',
                    'dark',
                    'none',
                ],
            },
        },
        shape: {
            control: {
                type: 'radio',
                options: ['rounded', 'square', 'sharp'],
            },
        },
    },
};
const Template = (args) => (React.createElement(Switcher, Object.assign({ "data-testid": "switcher" }, args)));
export const SwitcherStory = Template.bind({});
SwitcherStory.args = {
    text: '',
    size: 'medium',
    variant: 'primary',
    disabled: false,
    withShadow: false,
    thumbColor: '',
    bgColor: '',
    styles: undefined,
    className: 'ReactDynamicComponents',
    shape: 'rounded',
};
//# sourceMappingURL=switcher-component.stories.js.map