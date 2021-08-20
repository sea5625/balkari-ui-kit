import React, { Component } from "react";
import {
    Table,
    TableBody,
    TableContainer,
    TableHeader,
    TableHead,
    TableRow,
    TableCell,
    TableSelection
} from "./";
import Select from "../Select/Select";
import Pagination from "../Pagination/Pagination";
import { sortByHeaderKey } from "./tools/utils";
import { limitOptions } from "./stories/shared";

type Props = {
    rows: {
        [key: string]: any;
    }[];
    headers: {
        headerKey: string;
        text: string;
    }[];
    size?: "extra large" | "large" | "default" | "small" | "extra small";
    strippedRow?: boolean;
    sorting?: boolean;
    selection?: boolean;
    paging?:
        | {
              limitOptions: number[];
              limit: number;
              offset: number;
              total: number;
              onClickLimit: (limit) => void;
              onClickOffset: (offset) => void;
          }
        | false;
    customStyledCell?: boolean;
};

type State = {
    rows: {
        [key: string]: any;
    }[];
    isSorted: {
        sortHeaderKey: string;
        sortDirection: "NONE" | "DESC" | "ASC";
    };
    isSelecteds: any[];
};

export default class DataTable extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            rows: this.props.rows,
            isSorted: {
                sortHeaderKey: "",
                sortDirection: "NONE"
            },
            isSelecteds: []
        };
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.rows !== this.props.rows) {
            this.setState({
                ...this.state,
                rows: this.props.rows
            });
        }
    }

    getTableProps = () => {
        const { size, strippedRow, selection } = this.props;
        return {
            size,
            strippedRow,
            selection
        };
    };

    getHeaderProps = ({ header }) => {
        const { sorting } = this.props;
        const { sortDirection, sortHeaderKey } = this.state.isSorted;
        return {
            ...header,
            sorting,
            sortDirection,
            onClickSortHeader: this.onClickSortHeader,
            isSortHeader: sortHeaderKey === header.headerKey
        };
    };

    onClickSortHeader = (headerKey) => {
        const { rows } = this.props;
        const { isSorted } = this.state;
        const { sortDirection, sortHeaderKey } = isSorted;
        if (sortHeaderKey === headerKey) {
            this.setState(
                {
                    ...this.state,
                    isSorted: {
                        ...isSorted,
                        sortDirection:
                            sortDirection === "DESC"
                                ? "ASC"
                                : sortDirection === "ASC"
                                ? "NONE"
                                : "DESC"
                    }
                },
                () => {
                    const {
                        sortHeaderKey,
                        sortDirection
                    } = this.state.isSorted;
                    this.setState({
                        ...this.state,
                        rows: sortByHeaderKey(
                            rows,
                            sortHeaderKey,
                            sortDirection
                        )
                    });
                }
            );
        } else {
            this.setState(
                {
                    ...this.state,
                    isSorted: {
                        sortHeaderKey: headerKey,
                        sortDirection: "DESC"
                    }
                },
                () => {
                    const {
                        sortHeaderKey,
                        sortDirection
                    } = this.state.isSorted;
                    this.setState({
                        ...this.state,
                        rows: sortByHeaderKey(
                            rows,
                            sortHeaderKey,
                            sortDirection
                        )
                    });
                }
            );
        }
    };
    onClickSelect = (id) => {
        const { isSelecteds } = this.state;
        this.setState({
            ...this.state,
            isSelecteds: isSelecteds.includes(id)
                ? isSelecteds.filter((el) => el !== id)
                : isSelecteds.concat(id)
        });
    };

    onClickSelectAll = () => {
        const { isSelecteds, rows } = this.state;
        if (isSelecteds.length > 0) {
            this.setState({
                ...this.state,
                isSelecteds: []
            });
        } else {
            const arr: string[] = [];
            rows.forEach((row) => arr.push(row.id));
            this.setState({
                ...this.state,
                isSelecteds: arr
            });
        }
    };

    render() {
        const { headers, selection, paging, customStyledCell } = this.props;
        const { isSelecteds, rows } = this.state;
        return (
            <TableContainer>
                <Table {...this.getTableProps()}>
                    <TableHead>
                        <TableRow>
                            {selection && (
                                <TableSelection
                                    id={`all`}
                                    isSelected={
                                        isSelecteds.length === rows.length
                                            ? true
                                            : isSelecteds.length > 0
                                            ? "mixed"
                                            : false
                                    }
                                    callbackFunc={this.onClickSelectAll}
                                />
                            )}
                            {headers.map((header) => (
                                <TableHeader
                                    {...this.getHeaderProps({
                                        header
                                    })}
                                >
                                    {header.text}
                                </TableHeader>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow>
                                {selection && (
                                    <TableSelection
                                        id={row.id}
                                        isSelected={isSelecteds.includes(
                                            row.id
                                        )}
                                        callbackFunc={this.onClickSelect}
                                    />
                                )}
                                {headers.map((header) => (
                                    <TableCell
                                        {...row[header.headerKey]}
                                        customStyledCell={customStyledCell}
                                    >
                                        {row[header.headerKey].text}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                {paging && (
                    <div
                        className="bx-data-table-bottom"
                        style={{
                            marginTop: "1rem",
                            display: "flex",
                            lineHeight: "2.375rem",
                            justifyContent: "space-between"
                        }}
                    >
                        <div className="bx-select-limit">
                            Show{" "}
                            <Select
                                options={limitOptions}
                                callbackFunc={paging.onClickLimit}
                            />{" "}
                            Entries
                        </div>
                        <Pagination
                            callbackFunc={paging.onClickOffset}
                            total={paging.total}
                            offset={paging.offset}
                            limit={paging.limit}
                        />
                    </div>
                )}
            </TableContainer>
        );
    }
}
