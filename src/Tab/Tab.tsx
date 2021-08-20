import React, { Component } from "react";
import { TabContainer, TabNav, TabContent } from "./";

export type Props = {
    /** Tab Navs */
    navs: {
        text: string;
        disabled?: boolean;
    }[];
    /** Tab Contents */
    contents: any[];
    /** Tab Nav Position */
    navPosition?: "top" | "left" | "right";
};

type State = {
    isSelected: number;
};

const defaultProps = {
    navPosition: "top"
};

class Tab extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isSelected: 0
        };
    }
    static defaultProps = defaultProps;

    onClickNav = (navKey) => {
        this.setState({
            ...this.state,
            isSelected: navKey
        });
    };

    render() {
        const { navs, contents, navPosition } = this.props;
        const { isSelected } = this.state;
        return (
            <TabContainer navPosition={navPosition}>
                <div className="bx-tab-nav">
                    <ul>
                        {navs.map((nav, navKey) => (
                            <TabNav
                                onClickNav={this.onClickNav}
                                navKey={navKey}
                                isSelected={isSelected === navKey}
                                navPosition={navPosition}
                                disabled={nav.disabled}
                            >
                                {nav.text}
                            </TabNav>
                        ))}
                    </ul>
                </div>
                <TabContent>{contents[isSelected]}</TabContent>
            </TabContainer>
        );
    }
}

export default Tab;
