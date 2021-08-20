/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { withKnobs } from "@storybook/addon-knobs";
import { select } from "@storybook/addon-knobs";
import Tab from "./Tab";
import { navs, contents, navsWithDisable } from "./stories/shared";

const wrapper = css`
    margin-bottom: 5rem;
`;

// const subTitle = css`
//     margin: 1.25rem 0;
//     font-size: 1rem;
// `;

export const Default = () => {
    const navPosition = select("position", ["top", "left", "right"], "top");
    return <Tab navs={navs} contents={contents} navPosition={navPosition} />;
};

export const Side = () => {
    return (
        <div>
            <div css={wrapper}>
                <Tab navs={navs} contents={contents} />
            </div>
            <div css={wrapper}>
                <Tab navs={navs} contents={contents} navPosition={"left"} />
            </div>
            <div css={wrapper}>
                <Tab navs={navs} contents={contents} navPosition={"right"} />
            </div>
        </div>
    );
};

export const Disabled = () => {
    return <Tab navs={navsWithDisable} contents={contents} />;
};

export default {
    title: "Tabs|Tab",
    component: Tab,
    decorators: [withKnobs]
};
