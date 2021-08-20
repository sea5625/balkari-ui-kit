/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { color } from '../shared/colors';
import { BsChevronDown, BsChevronUp, BsCheck } from 'react-icons/bs';
import { useState } from "react";

type DropdownProps = {
  title: string;
  items: Object[];
  itemKey: string;
  labelValue: string;
  helperValue: string;
  iconBefore?: SVGAElement;
  iconAfter?: SVGAElement;
  chooseIcon?: SVGAElement;
  maxWidth?: string;
  maxHeight?: string;
  contentHidden: boolean;
  onClickList: any;
};

/** `Dropdown` present a list of options from which a user can select one option, or several. A selected option can represent a value in a form, or can be used as an action to filter or sort existing content.
 **/

const Dropdown = ({
  labelValue,
  helperValue,
  title,
  items,
  itemKey,
  iconBefore,
  iconAfter,
  chooseIcon,
  onClickList,
  maxWidth,
  maxHeight,
  contentHidden,

}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownCurrent, setDropdownCrurrent] = useState(title);

  const handleTwistIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={[dropdown_wrapper]}>
      {labelValue && (
        <label css={[dropdown_label]}>
          {labelValue}
        </label>
      )}
      <div css={[dropdown_box, { maxWidth }]} onClick={handleTwistIcon}>
        <p css={[current_value]}>{dropdownCurrent}</p>
        {isOpen ? (<div css={[dropdown_icon]}>{iconAfter}</div>)
          : (<div css={[dropdown_icon]}>{iconBefore}</div>)}
      </div>
      {helperValue && (
        <p css={[dropdown_helper]}>
          <span>* </span>
          <span>{helperValue}</span>
        </p>
      )}
      {isOpen ? (<ul css={[labelValue ? list_ul : margin_list_ul, { maxWidth }, { maxHeight }]}>
        {items.map((item, index) => {
          if (typeof item === 'string') {
            return <li css={[contentHidden ? content_hidden : list_item]} key={index} onClick={() => { onClickList(item), setIsOpen(!isOpen), setDropdownCrurrent(item) }}>{item}
              {dropdownCurrent === item ? <div css={[choose_icon]}>{chooseIcon}</div> : null}
            </li>
          }
          return <li css={[contentHidden ? content_hidden : list_item]} key={index} onClick={() => { onClickList(item[itemKey]), setIsOpen(!isOpen), setDropdownCrurrent(item[itemKey]) }}> {item[itemKey]}
            {dropdownCurrent === item[itemKey] ? <div css={[choose_icon]}>{chooseIcon}</div> : null}
          </li>
        })}
      </ul>) : null}
    </div>
  );
};


Dropdown.defaultProps = {
  iconBefore: <BsChevronDown />,
  iconAfter: <BsChevronUp />,
  chooseIcon: <BsCheck />,
  labelValue: null,
  helperValue: null,
  itemKey: null,
  contentHidden: true,
  maxWidth: "200px",
  items: [],
  size: 'medium',
  title: "Current Value",
  onClickList: () => { }
};

const dropdown_helper = css`
  font-size: 0.75rem;
  line-height: 1.5;
  letter-spacing: 1px;
  z-index: 0;
  width: 100%;
  margin-top: 0.25rem;
  color: #525252;
  opacity: 1;
`;


const list_ul = css`
  padding: 0;
  color: #161616;
  width: 100%;
  margin-top: 70px;
  overflow-y: scroll;
  position: absolute;
`

const margin_list_ul = css`
 ${list_ul} {
   margin-top:45px;
 }
`

const list_item = css`
  display: block;
  padding: 12px;
  padding-right:40px;
  border-bottom: 1px solid #dedede;
  background: #FFFFFF;
  background-color: ${color.lighter};
  cursor: pointer;
  &:hover {
    background-color: ${color.light};
  }
`
const content_hidden = css`
  ${list_item} {
    overflow:hidden; 
    white-space:nowrap; 
    text-overflow:ellipsis;
  }
`;

const dropdown_wrapper = css`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: flex-start;
`;

const dropdown_box = css`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 200px;
  background-color: ${color.lighter};
  border-bottom: 1px solid #525252;
  &:hover {
    background: ${color.light};
  }
  &:disabled {
    color: ${color.mediumdark};
    background-color: ${color.light};
    border-bottom: none;
    cursor: pointer;
  }
`;

const current_value = css`
  box-sizing: border-box;
  margin: 0;
  font-size: 100%;
  font-family: inherit;
  vertical-align: initial;
  width: 90%;
  height: 2.5rem;
  padding: 1rem 1rem;
  color: #161616;
  border: none;
  overflow:hidden; 
  white-space:nowrap; 
  text-overflow:ellipsis;
  cursor:pointer;
`;

const dropdown_label = css`
  box-sizing: border-box;
  padding: 0;
  font-size: 100%;
  font-family: inherit;
  border: 0;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.34;
  letter-spacing: 1px;
  display: inline-block;
  margin: 0 0 0.5rem;
  color: #525252;
  line-height: 1rem;
  vertical-align: initial;
`;

const dropdown_icon = css`
  position: absolute;
  right: 1rem;
  width: 1rem;
  height: 1rem;
  padding: 0;
  background: none;
  border: 0;
  cursor:pointer;
  svg {
    font-size: 1rem;
    fill: #525252;
  }
`;

const choose_icon = css`
  display:inline;
  position: absolute;
  right: 0.875rem;
  
  padding: 0;
  background: none;
  border: 0;
  cursor:pointer;
  svg {
    font-size: 1rem;
    fill: ${color.primary};
  }
`;


export default Dropdown;
