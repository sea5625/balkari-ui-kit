/** @jsx jsx */
import Dropdown from "./Dropdown";
import { jsx, css } from "@emotion/core";
import {
    withKnobs,
    text,
    boolean,
} from "@storybook/addon-knobs";

export default {
    title: "Form|Dropdown",
    component: Dropdown,
    decorators: [withKnobs]
};

export const dropDown = () => {
    const _ITEMS = [
        {
            id: 'option-0',
            text:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam. Blanditiis quia nemo enim voluptatibus quos ducimus porro molestiae nesciunt error cumque quaerat, tempore vero unde eum aperiam eligendi repellendus.',
        },
        {
            id: 'option-1',
            text: 'Option 1',
        },
        {
            id: 'option-2',
            text: 'Option 2',
        },
        {
            id: 'option-3',
            text: 'Option 3',
        },
        {
            id: 'option-4',
            text: 'Option 4',
        },
        {
            id: 'option-5',
            text: 'Option 5',
        },
    ];

    const dropDownProps = {
        items: _ITEMS,
        itemKey: "text",
        title: text("Dropdown title", "Dropdown Title"),
        labelValue: text("Label Text (labelValue)", null),
        helperValue: text("Helper Text (helperValue)", null),
        contentHidden: boolean("Dropdown List content overFlow hidden(contentHidden)", true),
        maxWidth: text("Dropdown List Box width (maxWidth)", "250px"),
        maxHeight: text("Dropdown List Box height (maxHeight)", "250px"),
        onClickList: (item) => console.log(item)
    };

    return <Dropdown {...dropDownProps} />;
};

dropDown.story = {
    name: "Default"
};




