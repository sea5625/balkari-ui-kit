/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color } from '../shared/colors';
import { CopyToClipboard } from "react-copy-to-clipboard";

export type ButtonProps = {
  /** Button Content */
  children: React.ReactNode;
  /** Function to call when clicked  */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** Sets the appearance of the button.*/
  kind:
  | 'primary'
  | 'secondary'
  | 'link'
  | 'success'
  | 'warning'
  | 'info'
  | 'danger';
  /** Sets the size of the button. */
  size: 'tiny' | 'small' | 'medium' | 'large' | 'giant';
  /** Disable button */
  disabled?: boolean;
  /** Sets the width of the button to random. */
  width?: string | number;
  /** Sets the height of the button to random. */
  height?: string | number;
  /** Position the icon svg 'left' and 'right' to insert into the button. */
  iconPosition: 'left' | 'right';
  /** Set this value to 'true' when only the icon is shown on the button. */
  iconOnly?: boolean;
  /** Sets the type of icon when the iconOnly option is 'true'. */
  iconType: 'circle' | 'square';
  /** Add CSS attributes to what you want the content to do when it is out of size. */
  overflow?: string;
  /** Specifies how the button represents overflowed text. */
  textOverflow?: string;
  /** Pass the text you want to copy to the clipboard. */
  copyText?: string;
};

/** The `Button` component is used to trigger an action.
 *
 * When using the option with Icon, you can use the option between `<Button></Button>` `Button` tags.
 *
 * Please add and use React-icons svg module (https://www.npmjs.com/package/react-icons).
 **/

const Button = ({
  children,
  kind,
  size,
  disabled,
  width,
  height,
  iconOnly,
  iconType,
  overflow,
  textOverflow,
  iconPosition,
  onClick,
  copyText,
}: ButtonProps) => {
  return (
    <CopyToClipboard text={copyText}>
      <button
        css={[
          style,
          kinds[kind],
          sizes[size],
          iconPositions[iconPosition],
          { width },
          { height },
          { overflow },
          { textOverflow },
          iconOnly && [iconOnlyStyle[iconType], iconOnlySizes[size]],
        ]}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    </CopyToClipboard>
  );
};

Button.defaultProps = {
  kind: 'primary',
  size: 'medium',
  iconPosition: 'left',
  iconType: 'circle',
};

const style = css`
      border: none;
      letter-spacing: 1px;
      outline: none;
      box-sizing: border-box;
      border-radius: 0.1rem;
      line-height: 1;
      font-weight: 600;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;
  &:disabled {
        cursor: not-allowed;
    }
  svg {
        width: 1em;
    }
  `;

const kinds = {
  primary: css`
    background: ${color.primary};
    color: ${color.lightest};
    svg {
        fill: ${color.lightest};
    }
    &:hover:enabled {
        background: ${color.primary_90};
    }
    &:active:enabled {
        background: ${color.primary_100};
    }
    &:disabled {
        background: ${color.medium};
    }
  `,
  secondary: css`
    background: none;
    color: ${color.primary};
    border: 1px solid ${color.primary};
    svg {
        fill: ${color.primary};
    }
    &:hover:enabled {
        border: 1px solid ${color.primary_100};
      color: ${color.primary_100};
      svg {
        fill: ${color.primary_100};
    }
  }
    &:active:enabled {
        border: 1px solid ${color.primary_90};
      color: ${color.primary_90};
      svg {
        fill: ${color.primary_90};
    }
  }

    &:disabled {
        color: ${color.medium};
      border: 1px solid ${color.medium};
      svg {
        fill: ${color.medium};
    }
  }
`,
  link: css`
    color: ${color.primary};
      background: none;
    svg {
        fill: ${color.primary};
    }
    &:hover:enabled {
        color: ${color.primary_100};
      svg {
        fill: ${color.primary_100};
    }
  }
    &:active:enabled {
        color: ${color.primary_90};
      svg {
        fill: ${color.primary_90};
    }
  }
    &:disabled {
        color: ${color.medium};
      fill: ${color.medium};
      svg {
        fill: ${color.medium};
    }
  }
`,
  success: css`
    background: ${color.success};
    color: ${color.lightest};
    svg {
        fill: ${color.lightest};
    }
    &:hover:enabled {
        background: ${color.success_80};
    }
    &:active:enabled {
        background: ${color.success_100};
    }
    &:disabled {
        background: ${color.medium};
    }
  `,
  info: css`
    background: ${color.info};
    color: ${color.lightest};
    svg {
        fill: ${color.lightest};
    }
    &:hover:enabled {
        background: ${color.info_80};
    }
    &:active:enabled {
        background: ${color.info_100};
    }
    &:disabled {
        background: ${color.medium};
    }
  `,
  warning: css`
    background: ${color.warning};
    color: ${color.lightest};
    svg {
        fill: ${color.lightest};
    }
    &:hover:enabled {
        background: ${color.warning_80};
    }
    &:active:enabled {
        background: ${color.warning_100};
    }
    &:disabled {
        background: ${color.medium};
    }
  `,
  danger: css`
    background: ${color.danger};
    color: ${color.lightest};
    svg {
        fill: ${color.lightest};
    }
    &:hover:enabled {
        background: ${color.danger_80};
    }
    &:active:enabled {
        background: ${color.danger_100};
    }
    &:disabled {
        background: ${color.medium};
    }
  `,
};

const sizes = {
  tiny: css`
        font-weight: 400;
        font-size: 0.7rem;
        padding: 0.3rem 0.6rem;
      `,
  small: css`
        font-size: 0.75rem;
        padding: 0.6rem 0.875rem;
      `,
  medium: css`
        font-size: 1rem;
        padding: 0.75rem 1rem;
      `,
  large: css`
        font-size: 1.125rem;
        padding: 1rem 1.5rem;
      `,
  giant: css`
        font-size: 1.35rem;
        padding: 1.2rem 1.875rem;
      `,
};

const iconOnlyStyle = {
  circle: css`
        padding: 0;
        border-radius: 50%;
    svg {
        margin: 0;
    }
  `,
  square: css`
    padding: 0;
    border-radius: 0.1rem;
    svg {
        margin: 0;
    }
  `,
};

const iconOnlySizes = {
  tiny: css`
        height: 1.5rem;
        width: 1.5rem;
      `,
  small: css`
        height: 1.75rem;
        width: 1.75rem;
      `,
  medium: css`
        height: 2.5rem;
        width: 2.5rem;
      `,
  large: css`
        height: 3rem;
        width: 3rem;
      `,
  giant: css`
        height: 3.5rem;
        width: 3.5rem;
      `,
};

const iconPositions = {
  left: css`
    svg {
        margin-right: 0.5rem;
    }
  `,
  right: css`
    svg {
        margin-left: 0.5rem;
    }
  `,
};

export default Button;