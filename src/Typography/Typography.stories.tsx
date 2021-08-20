/** @jsx jsx */
import Typography from "./Typography";
import { jsx, css } from "@emotion/core";
import { withKnobs, text, select } from "@storybook/addon-knobs";

export default {
    title: "Documents|Typography",
    component: Typography,
    decorators: [withKnobs]
};

export const typography = () => {
    const label = text("children", "Typography");
    const lineHeight = text("lineHeight", "1");
    const size = select("size", ["small", "medium", "large"], "small");
    const fontColor = select(
        "fontColor",
        ["default", "primary", "success", "info", "warning", "danger"],
        "default"
    );
    const head = select("head", ["h1", "h2", "h3", "h4", "h5", "h6", ""], "");
    const align = select(
        "align",
        ["inherit", "justify", "left", "right", "center"],
        "inherit"
    );
    const fontWeight = select(
        "fontWeight",
        ["thin", "light", "regular", "medium", "bold"],
        "regular"
    );
    const fontFamily = select(
        "fontFamily",
        ["inherit", "Roboto", "NotoSans", "Ubuntu", "Epliogue"],
        "Roboto"
    );

    return (
        <Typography
            size={size}
            fontColor={fontColor}
            head={head}
            align={align}
            fontWeight={fontWeight}
            fontFamily={fontFamily}
            lineHeight={lineHeight}
        >
            {label}
        </Typography>
    );
};

typography.story = {
    name: "Default"
};

const typographyWrapper = css`
    .description {
        margin-top: 1rem;
        font-weight: 200;
        margin-bottom: 0.5rem;
    }
    .sub-line {
        border: 1px solid #111;
        opacity: 0.25;
        margin-top: 1.75rem;
        margin-bottom: 1.75rem;
    }
    .line {
        border: 1px solid #111;
        margin-top: 1.75rem;
        margin-bottom: 1.75rem;
    }
    & > div + div {
        margin-top: 2rem;
    }
`;

export const Sizes = () => {
    return (
        <div css={typographyWrapper}>
            <div>
                <Typography size="small">Small size typography</Typography>
            </div>
            <div>
                <Typography size="medium">Medium size typography</Typography>
            </div>
            <div>
                <Typography size="large">Lrge size typography</Typography>
            </div>
        </div>
    );
};

export const Heading = () => {
    return (
        <div css={typographyWrapper}>
            <div>
                <Typography head="h1">This is Heading 1</Typography>
            </div>
            <div>
                <Typography head="h2">This is Heading 2</Typography>
            </div>
            <div>
                <Typography head="h3">This is Heading 3</Typography>
            </div>
            <div>
                <Typography head="h4">This is Heading 4</Typography>
            </div>
            <div>
                <Typography head="h5">This is Heading 5</Typography>
            </div>
            <div>
                <Typography head="h6">This is Heading 6</Typography>
            </div>
        </div>
    );
};

export const subHeading = () => {
    return (
        <div css={typographyWrapper}>
            <div>
                <Typography head="h1">
                    This is Heading 1<small> : Sub Heading</small>
                </Typography>
            </div>
            <div>
                <Typography head="h2">
                    This is Heading 2<small> : Sub Heading</small>
                </Typography>
            </div>
            <div>
                <Typography head="h3">
                    This is Heading 3<small> : Sub Heading</small>
                </Typography>
            </div>
            <div>
                <Typography head="h4">
                    This is Heading 4<small> : Sub Heading</small>
                </Typography>
            </div>
            <div>
                <Typography head="h5">
                    This is Heading 5<small> : Sub Heading</small>
                </Typography>
            </div>
            <div>
                <Typography head="h6">
                    This is Heading 6<small> : Sub Heading</small>
                </Typography>
            </div>
        </div>
    );
};

export const contextualTextColors = () => {
    return (
        <div css={typographyWrapper}>
            <div>
                <Typography fontColor="primary">
                    Primary Color : Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                </Typography>
            </div>
            <div>
                <Typography fontColor="success">
                    Success Color : Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                </Typography>
            </div>
            <div>
                <Typography fontColor="info">
                    Info Color : Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                </Typography>
            </div>
            <div>
                <Typography fontColor="warning">
                    Warning Color : Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                </Typography>
            </div>
            <div>
                <Typography fontColor="danger">
                    Danger Color : Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry.
                </Typography>
            </div>
        </div>
    );
};
export const fontFamilyRoboto = () => {
    return (
        <div css={typographyWrapper}>
            <div>
                <Typography head="h3">Roboto</Typography>
                <div>
                    <div className="description">Default</div>
                    <Typography>
                        Almost before we knew it, we had left the ground.
                    </Typography>
                </div>
                <div className="sub-line"></div>
                <div>
                    <div className="description">Size small</div>
                    <Typography size="small" fontWeight="thin">
                        Almost before we knew it, we had left the ground. - Thin
                    </Typography>
                    <Typography size="small" fontWeight="light">
                        Almost before we knew it, we had left the ground. -
                        Light
                    </Typography>
                    <Typography size="small" fontWeight="regular">
                        Almost before we knew it, we had left the ground. -
                        Regular
                    </Typography>
                    <Typography size="small" fontWeight="medium">
                        Almost before we knew it, we had left the ground. -
                        Medium
                    </Typography>
                    <Typography size="small" fontWeight="bold">
                        Almost before we knew it, we had left the ground. - Bold
                    </Typography>
                </div>
                <div>
                    <div className="description">Size medium</div>
                    <Typography size="medium" fontWeight="thin">
                        Almost before we knew it, we had left the ground. - Thin
                    </Typography>
                    <Typography size="medium" fontWeight="light">
                        Almost before we knew it, we had left the ground. -
                        Light
                    </Typography>
                    <Typography size="medium" fontWeight="regular">
                        Almost before we knew it, we had left the ground. -
                        Regular
                    </Typography>
                    <Typography size="medium" fontWeight="medium">
                        Almost before we knew it, we had left the ground. -
                        Medium
                    </Typography>
                    <Typography size="medium" fontWeight="bold">
                        Almost before we knew it, we had left the ground. - Bold
                    </Typography>
                </div>
                <div>
                    <div className="description">Size large</div>
                    <Typography size="large" fontWeight="thin">
                        Almost before we knew it, we had left the ground. - Thin
                    </Typography>
                    <Typography size="large" fontWeight="light">
                        Almost before we knew it, we had left the ground. -
                        Light
                    </Typography>
                    <Typography size="large" fontWeight="regular">
                        Almost before we knew it, we had left the ground. -
                        Regular
                    </Typography>
                    <Typography size="large" fontWeight="medium">
                        Almost before we knew it, we had left the ground. -
                        Medium
                    </Typography>
                    <Typography size="large" fontWeight="bold">
                        Almost before we knew it, we had left the ground. - Bold
                    </Typography>
                </div>
                <div className="line"></div>
            </div>
        </div>
    );
};

export const fontFamilyNotosans = () => {
    return (
        <div css={typographyWrapper}>
            <div>
                <Typography head="h3">NotoSans KR</Typography>
                <div>
                    <div className="description">Default</div>
                    <Typography fontFamily="NotoSans">
                        Almost before we knew it, we had left the ground.
                    </Typography>
                </div>
                <div className="sub-line"></div>
                <div>
                    <div className="description">Size small</div>
                    <Typography
                        size="small"
                        fontWeight="thin"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. - Thin
                    </Typography>
                    <Typography
                        size="small"
                        fontWeight="light"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. -
                        Light
                    </Typography>
                    <Typography
                        size="small"
                        fontWeight="regular"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. -
                        Regular
                    </Typography>
                    <Typography
                        size="small"
                        fontWeight="medium"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. -
                        Medium
                    </Typography>
                    <Typography
                        size="small"
                        fontWeight="bold"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. - Bold
                    </Typography>
                </div>
                <div>
                    <div className="description">Size medium</div>
                    <Typography
                        size="medium"
                        fontWeight="thin"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. - Thin
                    </Typography>
                    <Typography
                        size="medium"
                        fontWeight="light"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. -
                        Light
                    </Typography>
                    <Typography
                        size="medium"
                        fontWeight="regular"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. -
                        Regular
                    </Typography>
                    <Typography
                        size="medium"
                        fontWeight="medium"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. -
                        Medium
                    </Typography>
                    <Typography
                        size="medium"
                        fontWeight="bold"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. - Bold
                    </Typography>
                </div>
                <div>
                    <div className="description">Size large</div>
                    <Typography
                        size="large"
                        fontWeight="thin"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. - Thin
                    </Typography>
                    <Typography
                        size="large"
                        fontWeight="light"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. -
                        Light
                    </Typography>
                    <Typography
                        size="large"
                        fontWeight="regular"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. -
                        Regular
                    </Typography>
                    <Typography
                        size="large"
                        fontWeight="medium"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. -
                        Medium
                    </Typography>
                    <Typography
                        size="large"
                        fontWeight="bold"
                        fontFamily="NotoSans"
                    >
                        Almost before we knew it, we had left the ground. - Bold
                    </Typography>
                </div>
                <div className="line"></div>
            </div>
        </div>
    );
};
export const fontFamilyUbuntu = () => {
    return (
        <div css={typographyWrapper}>
            <div>
                <Typography head="h3">Ubuntu</Typography>
                <div>
                    <div className="description">Default</div>
                    <Typography fontFamily="Ubuntu">
                        Almost before we knew it, we had left the ground.
                    </Typography>
                </div>
                <div className="sub-line"></div>
                <div>
                    <div className="description">Size small</div>
                    <Typography
                        size="small"
                        fontWeight="thin"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. - Thin
                    </Typography>
                    <Typography
                        size="small"
                        fontWeight="light"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. -
                        Light
                    </Typography>
                    <Typography
                        size="small"
                        fontWeight="regular"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. -
                        Regular
                    </Typography>
                    <Typography
                        size="small"
                        fontWeight="medium"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. -
                        Medium
                    </Typography>
                    <Typography
                        size="small"
                        fontWeight="bold"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. - Bold
                    </Typography>
                </div>
                <div>
                    <div className="description">Size medium</div>
                    <Typography
                        size="medium"
                        fontWeight="thin"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. - Thin
                    </Typography>
                    <Typography
                        size="medium"
                        fontWeight="light"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. -
                        Light
                    </Typography>
                    <Typography
                        size="medium"
                        fontWeight="regular"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. -
                        Regular
                    </Typography>
                    <Typography
                        size="medium"
                        fontWeight="medium"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. -
                        Medium
                    </Typography>
                    <Typography
                        size="medium"
                        fontWeight="bold"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. - Bold
                    </Typography>
                </div>
                <div>
                    <div className="description">Size large</div>
                    <Typography
                        size="large"
                        fontWeight="thin"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. - Thin
                    </Typography>
                    <Typography
                        size="large"
                        fontWeight="light"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. -
                        Light
                    </Typography>
                    <Typography
                        size="large"
                        fontWeight="regular"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. -
                        Regular
                    </Typography>
                    <Typography
                        size="large"
                        fontWeight="medium"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. -
                        Medium
                    </Typography>
                    <Typography
                        size="large"
                        fontWeight="bold"
                        fontFamily="Ubuntu"
                    >
                        Almost before we knew it, we had left the ground. - Bold
                    </Typography>
                </div>
                <div className="line"></div>
            </div>
        </div>
    );
};

export const fontFamilyEpilogue = () => {
    return (
        <div css={typographyWrapper}>
            <div>
                <Typography head="h3">Epliogue</Typography>
                <div>
                    <div className="description">Default</div>
                    <Typography fontFamily="Epliogue">
                        Almost before we knew it, we had left the ground.
                    </Typography>
                </div>
                <div className="sub-line"></div>
                <div>
                    <div className="description">Size small</div>
                    <Typography
                        size="small"
                        fontWeight="thin"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. - Thin
                    </Typography>
                    <Typography
                        size="small"
                        fontWeight="light"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. -
                        Light
                    </Typography>
                    <Typography
                        size="small"
                        fontWeight="regular"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. -
                        Regular
                    </Typography>
                    <Typography
                        size="small"
                        fontWeight="medium"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. -
                        Medium
                    </Typography>
                    <Typography
                        size="small"
                        fontWeight="bold"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. - Bold
                    </Typography>
                </div>
                <div>
                    <div className="description">Size medium</div>
                    <Typography
                        size="medium"
                        fontWeight="thin"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. - Thin
                    </Typography>
                    <Typography
                        size="medium"
                        fontWeight="light"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. -
                        Light
                    </Typography>
                    <Typography
                        size="medium"
                        fontWeight="regular"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. -
                        Regular
                    </Typography>
                    <Typography
                        size="medium"
                        fontWeight="medium"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. -
                        Medium
                    </Typography>
                    <Typography
                        size="medium"
                        fontWeight="bold"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. - Bold
                    </Typography>
                </div>
                <div>
                    <div className="description">Size large</div>
                    <Typography
                        size="large"
                        fontWeight="thin"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. - Thin
                    </Typography>
                    <Typography
                        size="large"
                        fontWeight="light"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. -
                        Light
                    </Typography>
                    <Typography
                        size="large"
                        fontWeight="regular"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. -
                        Regular
                    </Typography>
                    <Typography
                        size="large"
                        fontWeight="medium"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. -
                        Medium
                    </Typography>
                    <Typography
                        size="large"
                        fontWeight="bold"
                        fontFamily="Epliogue"
                    >
                        Almost before we knew it, we had left the ground. - Bold
                    </Typography>
                </div>
                <div className="line"></div>
            </div>
        </div>
    );
};
