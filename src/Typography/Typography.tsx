/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { color } from "../shared/colors";

type TypographyProps = {
    /** Text content */
    children: React.ReactNode;
    /** Sets the size of the text. */
    size: "small" | "medium" | "large";
    /** Sets the align of the text. */
    align: "inherit" | "left" | "center" | "right" | "justify";
    /** Sets the weight of the text. */
    fontWeight: "thin" | "light" | "regular" | "medium" | "bold";
    /** Sets the font-family of the text. */
    fontFamily: "inherit" | "Roboto" | "NotoSans" | "Ubuntu" | "Epliogue";
    /** Sets the line-height CSS property */
    lineHeight?: string | number;
    /** Sets the color of the text. */
    fontColor:
        | "default"
        | "primary"
        | "success"
        | "info"
        | "warning"
        | "danger";
    /** Sets the header tag.*/
    head?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "";
};

/** `Typography` The component outputs information in the form of text on the screen.  */
const Typography = ({
    children,
    size,
    fontColor,
    head,
    align,
    fontWeight,
    fontFamily,
    lineHeight
}: TypographyProps) => {
    const cssValues = [
        sizes[size],
        fontColors[fontColor],
        aligns[align],
        fontWeights[fontWeight],
        fontFamilys[fontFamily],
        { lineHeight }
    ];
    switch (head) {
        case "h1":
            return <h1 css={[...cssValues, heads[head]]}>{children}</h1>;
        case "h2":
            return <h2 css={[...cssValues, heads[head]]}>{children}</h2>;
        case "h3":
            return <h3 css={[...cssValues, heads[head]]}>{children}</h3>;
        case "h4":
            return <h4 css={[...cssValues, heads[head]]}>{children}</h4>;
        case "h5":
            return <h5 css={[...cssValues, heads[head]]}>{children}</h5>;
        case "h6":
            return <h6 css={[...cssValues, heads[head]]}>{children}</h6>;
        default:
            return <p css={cssValues}>{children}</p>;
    }
};

Typography.defaultProps = {
    size: "small",
    fontColor: "default",
    head: "",
    align: "inherit",
    fontWeight: "regular",
    fontFamily: "Roboto"
};

const sizes = {
    small: css`
        font-size: 1rem;
    `,
    medium: css`
        font-size: 1.25rem;
    `,
    large: css`
        font-size: 1.5rem;
    `
};

const aligns = {
    inherit: css`
        text-align: inherit;
    `,
    right: css`
        text-align: right;
    `,
    left: css`
        text-align: left;
    `,
    center: css`
        text-align: center;
    `,
    justify: css`
        text-align: justify;
    `
};

const fontFamilys = {
    inherit: css`
        font-family: "inherit", sans-serif;
    `,
    Epliogue: css`
        font-family: "Epilogue", sans-serif;
    `,
    NotoSans: css`
        font-family: "Noto Sans KR", sans-serif;
    `,
    Roboto: css`
        font-family: "Roboto", sans-serif;
    `,
    Ubuntu: css`
        font-family: "Ubuntu", sans-serif;
    `
};

const fontWeights = {
    thin: css`
        font-weight: 100;
    `,
    light: css`
        font-weight: 300;
    `,
    regular: css`
        font-weight: 400;
    `,
    medium: css`
        font-weight: 500;
    `,
    bold: css`
        font-weight: 700;
    `
};

const heads = {
    h1: css`
        font-size: 2.5rem;
    `,
    h2: css`
        font-size: 2rem;
    `,
    h3: css`
        font-size: 1.75rem;
    `,
    h4: css`
        font-size: 1.5rem;
    `,
    h5: css`
        font-size: 1.25rem;
    `,
    h6: css`
        font-size: 1.125rem;
    `
};

const fontColors = {
    default: css`
        color: ${color.default};
    `,
    primary: css`
        color: ${color.primary};
    `,
    success: css`
        color: ${color.success};
    `,
    info: css`
        color: ${color.info};
    `,
    warning: css`
        color: ${color.warning};
    `,
    danger: css`
        color: ${color.danger};
    `
};

export default Typography;
