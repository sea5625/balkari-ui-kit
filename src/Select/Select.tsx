/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { color } from "../shared/colors";

type Props = {
    options: any[];
    width?: string;
    callbackFunc?: (option) => void;
};

const Select = ({ options, callbackFunc }: Props) => {
    return (
        <select
            css={[style]}
            onChange={(e) => callbackFunc && callbackFunc(e.target.value)}
        >
            {options.map((option, key) => (
                <option value={option} key={key}>
                    {option}
                </option>
            ))}
        </select>
    );
};

const style = css`
    outline: none;
    border: 1px solid #ccc;
    padding: 0 0.75rem;
    height: 2.375rem;
    &:focus {
        border: 1px solid ${color.primary};
    }
`;

export default Select;
