import React, {useState} from "react";
import {UnControlledOnOff} from "./UnControlledOnOff";
import {Meta} from "@storybook/react/types-6-0";
import {action} from "@storybook/addon-actions";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1



export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const callback = action("on or off clicked");

export const OnMode = () => <UnControlledOnOff defaultOn={true} onChange={callback}/>;
export const OffMode = () => <UnControlledOnOff defaultOn={false} onChange={callback}/>;


export const RatingChanging = () => {
    const [value, setValue] = useState<boolean>(true);
   return <UnControlledOnOff onChange={(x) => x}/>;
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
