import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import {UnControlledRating} from "./UnControlledRating";
import {action} from "@storybook/addon-actions";


export default {
    title: "UnControlledRating",
    component: UnControlledRating,
    argTypes: {
        backgroundColor: {control: "color"},
    },
} as Meta;

const callback = action("rating changed inside component")

export const EmptyRating = () => <UnControlledRating defaultValue={0} onChange={callback}/>;
export const Rating1 = () => <UnControlledRating defaultValue={0} onChange={callback}/>;
export const Rating2 = () => <UnControlledRating defaultValue={1} onChange={callback}/>;
export const Rating3 = () => <UnControlledRating defaultValue={2} onChange={callback}/>;
export const Rating4 = () => <UnControlledRating defaultValue={3} onChange={callback}/>;
export const Rating5 = () => <UnControlledRating defaultValue={4} onChange={callback}/>;
export const Rating6 = () => <UnControlledRating defaultValue={5} onChange={callback}/>;


// export const Primary = Template.bind({});
// Primary.args = {
//     primary: true,
//     label: 'Button',
// };
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//     label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     size: 'large',
//     label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     size: 'small',
//     label: 'Button',
// };
