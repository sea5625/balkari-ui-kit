/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export type ButtonGroupProps = {
  /** Direction to show children element */
  direction: 'row' | 'column';
  /** Show button to right. */
  rightAlign?: boolean;
  /** Sets the distance between the button and buttons. */
  gap: number | string;
  /** Buttons to show in the Button Group. */
  children: React.ReactNode;
  /** Use when you want to customize your style */
  className?: string;
  /** Set to 'true' when you want to specify the components of the button group as inline. */
  nonFlex: boolean;
};

/**
 * Use `ButtonGroup` component to show multiple `Button` components or to align buttons to the right.
 */
const ButtonGroup = ({
  direction,
  rightAlign,
  children,
  nonFlex,
  gap,
  className,
}: ButtonGroupProps) => {
  return (
    <div
      css={[
        {
          display: nonFlex ? 'inline-block' : 'flex',
          flexDirection: direction,
        },
        gapStyle(direction, gap),
        rightAlign && rightAlignStyle,
      ]}
      className={className}
    >
      {children}
    </div>
  );
};

ButtonGroup.defaultProps = {
  direction: 'row',
  gap: '0.5rem',
  nonFlex: false,
};

const gapStyle = (direction: 'row' | 'column', gap: number | string) => {
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';

  return css({
    'button + button': {
      [marginType]: gap,
    },
    'input + button ': {
      [marginType]: gap,
    },
  });
};

const rightAlignStyle = css`
  justify-content: flex-end;
`;

export default ButtonGroup;
