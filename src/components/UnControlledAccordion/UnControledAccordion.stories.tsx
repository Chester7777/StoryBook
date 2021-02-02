import React, {useState} from "react";
import {Meta} from "@storybook/react/types-6-0";
import {action} from "@storybook/addon-actions";
import {UnControlledAccordion} from "./UnControlledAccordion";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1



export default {
    title: 'UnControlledAccordion',
    component: UnControlledAccordion,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const callback = action("on or off clicked");
export const UnMenuCollapsedMode = () => <UnControlledAccordion titleValue={"Menu"} />;
export const UnUserCollapsedMode = () => <UnControlledAccordion titleValue={"Users"} />;

export const RatingChanging = () => {
    const [value, setValue] = useState<boolean>(true);
   return <UnControlledAccordion titleValue={"Users"} />;
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
