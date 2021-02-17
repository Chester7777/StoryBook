import React, {useState} from "react";
import {Meta, Story} from "@storybook/react/types-6-0";
import {action} from "@storybook/addon-actions";
import {Accordion, AccordionPropsType} from "./Accordion";

// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

const GetCategoryObj = (categoryName: string) => ({
    table: {
        category: categoryName
    }
})

export default {
    title: "Accordion",
    component: Accordion,
    argTypes: {
        color: {
            control: "color",
            ...GetCategoryObj("Colors")
        },
        onChange: {
            ...GetCategoryObj("Events")
        },
        onClick: {
            ...GetCategoryObj("Events")
        },
        backgroundColor: {
            control: "color",
            ...GetCategoryObj("BackGround")
        },

    },
} as Meta;


const callback = action("on or off clicked");
const onClickCallback = action("som item was clicked");

// const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;
//
// const callBacksProps = {
//     onChange: callback
// }

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} items={[]}
                                                  onClick={onClickCallback}/>;
export const UserCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback}
                                                  items={[{title: "Dimych", value: 1}, {title: "Anton", value: 2}, {
                                                      title: "Valy",
                                                      value: 3
                                                  }, {title: "Oly", value: 4}]} onClick={onClickCallback}/>;

// export const MenuCollapsedMode = Template.bind({})
// MenuCollapsedMode.args = {
//     /**
//      * Callback that is called when any item clicked
//      */
//     ...callBacksProps,
//     /**
//      * TitleValue is string not cheng
//      */
//     titleValue: "Menu",
//     collapsed: true,
//     items: Array<ItemsType>
// }
// export const UserCollapsedMode = Template.bind({})
// UserCollapsedMode.args = {
//     ...callBacksProps,
//     titleValue: "Users",
//     collapsed: false,
//     items: Array<ItemsType>
//
// }


export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)}
                      items={[{title: "Dimych", value: 1}, {title: "Anton", value: 2}, {
                          title: "Valy",
                          value: 3
                      }, {title: "Oly", value: 4}]}
                      onClick={onClickCallback}
    />;
}
// ModeChanging.args = {
//     titleValue: "Users"
// }


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
