/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { MdMoreHoriz, MdChevronLeft, MdChevronRight } from "react-icons/md";
import { color } from "../shared/colors";

type PaginationProps = {
    total: number;
    offset: number;
    limit: number;
    position?: "start" | "center" | "end";
    callbackFunc: (offset: number) => void;
};

const Pagination = ({
    total,
    offset,
    limit,
    position,
    callbackFunc
}: PaginationProps) => {
    const currentPage = offset === 0 ? 1 : offset / limit + 1;
    const totalPages = Math.ceil(total / limit);

    const gotoPage = (_page) => {
        if (!_page) {
            return;
        }
        const _offset = limit * Number(_page - 1);
        callbackFunc(_offset);
    };

    const onClickPage = (page) => {
        gotoPage(page);
    };

    const onClickPrev = (step) => {
        gotoPage(currentPage - step);
    };

    const onClickNext = (step) => {
        gotoPage(currentPage + step);
    };

    const range = (from, to, step = 1) => {
        let i: number = from;
        const range: number[] = [];
        while (i <= to) {
            range.push(i);
            i += step;
        }
        return range;
    };

    const makePageNumbers = () => {
        const totalNumbers = 5;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage - 2);
            const endPage = Math.min(totalPages - 1, currentPage + 2);

            let pages: any[] = range(startPage, endPage);

            const prevSpill = startPage > 2;
            const nextSpill = totalPages - endPage > 1;
            const spillOffset = totalNumbers - (pages.length + 1);
            if (prevSpill && !nextSpill) {
                const extraPages = range(
                    startPage - spillOffset,
                    startPage - 1
                );
                pages = ["prev", ...extraPages, ...pages];
            } else if (!prevSpill && nextSpill) {
                const extraPages = range(endPage + 1, endPage + spillOffset);
                pages = [...pages, ...extraPages, "next"];
            } else if (!prevSpill && nextSpill) {
                const extraPages = range(endPage + 1, endPage + spillOffset);
                pages = [...pages, ...extraPages, "next"];
            } else {
                pages = ["prev", ...pages, "next"];
            }
            return [1, ...pages, totalPages];
        }

        return range(1, totalPages);
    };

    const pages = makePageNumbers();
    return (
        <div className="bx-pagination" css={[style]}>
            <div className={`pagination ${position}`}>
                <ul>
                    <li
                        className={`dir-item next ${
                            currentPage === 1 ? "disabled" : ""
                        }`}
                    >
                        <button
                            onClick={() => onClickPrev(1)}
                            disabled={currentPage === 1}
                        >
                            <MdChevronLeft />
                        </button>
                    </li>
                    <div className="page-items">
                        <ul>
                            {pages.map((page, key) => {
                                if (page === "prev") {
                                    return (
                                        <li
                                            key={key}
                                            className="page-item"
                                            onClick={() => onClickPrev(9)}
                                        >
                                            <MdMoreHoriz />
                                        </li>
                                    );
                                } else if (page === "next") {
                                    return (
                                        <li
                                            key={key}
                                            className="page-item"
                                            onClick={() => onClickNext(9)}
                                        >
                                            <MdMoreHoriz />
                                        </li>
                                    );
                                }
                                return (
                                    <li
                                        key={key}
                                        className={`page-item${
                                            currentPage === page
                                                ? " active"
                                                : ""
                                        }`}
                                        onClick={() => onClickPage(page)}
                                    >
                                        {page}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <li
                        className={`dir-item next ${
                            currentPage === totalPages ? "disabled" : ""
                        }`}
                    >
                        <button
                            onClick={() => onClickNext(1)}
                            disabled={
                                currentPage === totalPages ||
                                Number(total) === 0
                            }
                        >
                            <MdChevronRight />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

Pagination.defaultProps = {
    total: 500,
    offset: 0,
    limit: 25
};

const style = css`
    ul {
        list-style: none;
    }
    .pagination {
        display: flex;
        &.center {
            justify-content: center;
        }
        &.end {
            justify-content: flex-end;
        }
        > ul {
            display: flex;
        }
        .page-items {
            min-width: 24rem;
            ul {
                display: flex;
                justify-content: center;
            }
        }
        .dir-item,
        .page-item {
            height: 2.375rem;
            line-height: 2.375rem;
            cursor: pointer;
            text-align: center;
        }
        .dir-item {
            button {
                line-height: 2.375rem;
                font-size: 1.125rem;
            }
            &.disabled {
                cursor: not-allowed;
            }
        }
        .page-item {
            min-width: 2.375rem;
            text-align: center;
            box-sizing: border-box;

            &.active {
                background: ${color.primary};
                color: #fff;
                border: 1px solid ${color.primary};
            }
        }
    }
`;

export default Pagination;
