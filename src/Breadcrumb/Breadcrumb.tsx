/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { VscHome } from "react-icons/vsc";
import { History } from "history";
import { htmlEntityDec } from "./tools/utils";
type Props = {
    history: History;
    breadcrumbItems: {
        text: string;
        path: string;
        current: boolean;
    }[];
    breadcrumbHeader?: string;
    breadcrumbSeparator: string;
};

const Breadcrumb = ({
    history,
    breadcrumbItems,
    breadcrumbHeader,
    breadcrumbSeparator
}: Props) => {
    return (
        <div className="bx-breadcrumb" css={[style]}>
            <p className="breadcrumb-header">{breadcrumbHeader}</p>
            <ul className="breadcrumb-list">
                <li>
                    <button
                        onClick={() => {
                            history.push("/");
                        }}
                    >
                        <VscHome />
                    </button>
                    <span className="separator">
                        {htmlEntityDec(breadcrumbSeparator)}
                    </span>
                </li>
                {breadcrumbItems.map((breadcrumbItem, key) => {
                    return (
                        <li key={key}>
                            <button
                                className={`${
                                    breadcrumbItem.current ? "current" : ""
                                }`}
                                onClick={() => {
                                    history.push(`${breadcrumbItem.path}`);
                                }}
                            >
                                {breadcrumbItem.text}
                            </button>
                            {key !== breadcrumbItems.length - 1 && (
                                <span className="separator">
                                    {htmlEntityDec(breadcrumbSeparator)}
                                </span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const style = css`
    .breadcrumb-header {
        font-size: 1.25rem;
        margin-bottom: 0.25rem;
    }
    .breadcrumb-list {
        display: flex;
        list-style: none;
        li {
            color: #7e7e7e;
            button {
                color: #7e7e7e;
                font-size: 0.875rem;
                margin: 0;
                padding: 0;
                &.current {
                    color: #353c4e;
                }
            }
            .separator {
                margin: 0 0.375rem;
            }
        }
    }
`;

Breadcrumb.defaultProps = {
    breadcrumbHeader: "",
    breadcrumbSeparator: "/"
};

export default Breadcrumb;
