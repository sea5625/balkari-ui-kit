/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import Breadcrumb from "./Breadcrumb";
import { withKnobs, text } from "@storybook/addon-knobs";
import { createBrowserHistory } from "history";

export const Default = () => {
    const breadcrumbHeader = text("breadcrumbHeader", "");
    const history = createBrowserHistory();
    const breadcrumbSeparator = text("breadcrumbSeparator", "");
    const breadcrumbItems = [
        {
            text: "Breadcrumb 1",
            current: false,
            path: "/breadcrumb1"
        },
        {
            text: "Breadcrumb 2",
            current: false,
            path: "/breadcrumb2"
        },
        {
            text: "Breadcrumb 3",
            current: true,
            path: "/breadcrumb3"
        }
    ];
    return (
        <Breadcrumb
            history={history}
            breadcrumbHeader={breadcrumbHeader}
            breadcrumbItems={breadcrumbItems}
            breadcrumbSeparator={
                breadcrumbSeparator ? breadcrumbSeparator : "/"
            }
        />
    );
};

export default {
    title: "Breadcrumbs|Breadcrumb",
    component: Breadcrumb,
    decorators: [withKnobs]
};
