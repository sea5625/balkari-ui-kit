/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { select, number } from "@storybook/addon-knobs";
import Pagination from "../Pagination";
import Select from "../../Select/Select";
import { limitOptions } from "../../Table/stories/shared";
import { color } from "../../shared/colors";

const style = css`
    display: flex;
    line-height: 2.375rem;
    justify-content: space-between;
    .bx-input-goto {
        input {
            outline: none;
            border: 1px solid #ccc;
            padding: 0 0.75rem;
            height: 2.375rem;
            width: 1.5rem;
            &:focus {
                border: 1px solid ${color.primary};
            }
        }
        button {
            background: ${color.primary};
            height: calc(2.375rem + 2px);
            width: 2.2rem;
            color: #fff;
        }
    }
`;

const Extension = () => {
    const [offset, setOffest] = useState(0);
    const [limit, setLimit] = useState(10);
    const [pageInputValue, setPageInputValue] = useState("");
    const total = number("total", 500);
    return (
        <div className="bx-data-table-bottom" css={[style]}>
            <div className="bx-select-limit">
                Show{" "}
                <Select
                    options={limitOptions}
                    callbackFunc={(_limit) => {
                        setLimit(_limit);
                        setOffest(0);
                    }}
                />{" "}
                Entries
            </div>
            <Pagination
                limit={limit}
                offset={offset}
                total={total}
                callbackFunc={(_offset: number) => {
                    setOffest(_offset);
                }}
            />
            <div className="bx-input-goto">
                <input
                    type="text"
                    value={pageInputValue}
                    onChange={(e) => {
                        setPageInputValue(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        setOffest((Number(pageInputValue) - 1) * limit);
                    }}
                >
                    Go
                </button>
            </div>
        </div>
    );
};

export default Extension;
