/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export type RadioAndCheckBoxGroupProps = {
  /** RadioButtons and CheckBoxesto show in the Group. */
  children: React.ReactNode;
  /**	Specify an optional className to be applied to the node */
  className?: string;
  /** Direction to show children element */
  direction: 'row' | 'column';
  /** Sets the distance between the element and elements. */
  gap: number | string;
  /** Specify whether to visually show the captions(legend) */
  legend?: boolean;
  /** Provide text that is used alongside the control captions(legend) for additional help */
  legendValue: string;
  /** Specify whether to visually show the helper */
  helper?: boolean;
  /** Provide text that is used alongside the control label for additional help */
  helperValue?: string;
};

/**
Use `RadioAndCheckBoxGroup` component to show multiple `CheckBox` and `RadioButton` components 
 */

const RadioAndCheckBoxGroup = ({
  children,
  className,
  direction,
  gap,
  legend,
  legendValue,
  helper,
  helperValue,
}: RadioAndCheckBoxGroupProps) => {
  return (
    <div css={[groupContainer, gapStyle(direction, gap)]} className={className}>
      {legend ? <legend css={[legendStyle]}>{legendValue}</legend> : null}
      {helper ? <span css={[helperStyle]}>{helperValue}</span> : null}
      <div css={[groupInside[direction]]}>{children}</div>
    </div>
  );
};

RadioAndCheckBoxGroup.defaultProps = {
  direction: 'row',
  gap: '1rem',
};

const gapStyle = (direction: 'row' | 'column', gap: number | string) => {
  const marginType = direction === 'row' ? 'marginLeft' : 'marginTop';
  return css({
    'div + div': {
      [marginType]: gap,
    },
  });
};

const groupContainer = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
`;

const groupInside = {
  row: css`
    display: flex;
  `,
  column: css`
    display: inline-block;
  `,
};

const legendStyle = css`
  font-size: 0.875rem;
  color: #525252;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

const helperStyle = css`
  font-size: 0.75rem;
  color: #5a6872;
  line-height: 1.5;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

export default RadioAndCheckBoxGroup;
