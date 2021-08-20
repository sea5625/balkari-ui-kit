/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdIndeterminateCheckBox
} from "react-icons/md";
import cx from "classnames";
import { color } from "../shared/colors";

type TableSelectionProps = {
    id: any;
    className?: string;
    isSelected?: boolean | "mixed";
    callbackFunc: (id?: string) => void;
};

const TableSelection = ({
    id,
    isSelected,
    callbackFunc
}: TableSelectionProps) => {
    if (id === "all") {
        return (
            <th css={[style]} onClick={() => callbackFunc()}>
                {isSelected === "mixed" ? (
                    <MdIndeterminateCheckBox />
                ) : !isSelected ? (
                    <MdCheckBoxOutlineBlank />
                ) : (
                    <MdCheckBox />
                )}
            </th>
        );
    } else {
        return (
            <td css={[style]} onClick={() => callbackFunc(id)}>
                {isSelected ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}{" "}
            </td>
        );
    }
};

const style = css`
    border-top: 1px solid #e9ecef;
`;

TableSelection.defaultProps = {};

export default TableSelection;
