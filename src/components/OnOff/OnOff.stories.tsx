import React, {useState} from "react";
import {OnOff} from "./OnOff";
import {Meta} from "@storybook/react/types-6-0";
import {action} from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1



export default {
    title: 'OnOff',
    component: OnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const callback = action("on or off clicked");
export const OnMode = () => <OnOff on={true} onChange={(a) => a}/>;
export const OffMode = () => <OnOff on={false} onChange={(a) => a}/>;

export const RatingChanging = () => {
    const [value, setValue] = useState<boolean>(true);
   return <OnOff on={value} onChange={setValue}/>;
}


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
