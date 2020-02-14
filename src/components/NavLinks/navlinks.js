import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Location } from "@reach/router";
import { Sun, Moon } from "../Icons/icons";
import SearchIcon from "../SearchIcon";

function ListItem(props) {
    const data = props.data;
    let anchorAttrs = {
        href: data.url,
        title: data.name
    };
    return (
        <Location>
            {({ location }) => {
                return (
                    <li>
                        <AniLink
                            fade
                            to={data.url}
                            {...anchorAttrs}
                            className={
                                "/" + location.pathname.split("/")[1] ===
                                data.url
                                    ? "active"
                                    : ""
                            }
                        >
                            <span>{data.name}</span>
                        </AniLink>
                    </li>
                );
            }}
        </Location>
    );
}

class ThemeSwitchButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkMode: this.props.darkmode
        };
    }

    componentDidMount() {
        const _this = this;
        let darkMode = localStorage.getItem("darkMode");

        window.__setPreferredTheme(_this.state.darkMode
            ? "dark"
            : "light");
        if (darkMode) {
            this.setState(
                {
                    darkMode: darkMode === "true"
                },
                () => {
                    window.__setPreferredTheme(_this.state.darkMode
                        ? "dark"
                        : "light");
                }
            );
        }

        this.switchBtn.addEventListener("click", function() {
            _this.setState({
                darkMode: !_this.state.darkMode
            });
            localStorage.setItem("darkMode", _this.state.darkMode);

            window.__setPreferredTheme(_this.state.darkMode
                ? "dark"
                : "light");
        });
    }
    render() {
        return (
            <React.Fragment>
                <li className="switch-theme">
                    <div
                        className="switch-button"
                        ref={c => (this.switchBtn = c)}
                    >
                        <div
                            title="Mude para o Dark Mode"
                            data-switch-to="dark"
                            className={!this.state.darkMode ? "active" : ""}
                            
                        >
                            <Sun />
                        </div>
                        <div
                            title="Mude para o Light Mode"
                            data-switch-to="light"
                            className={this.state.darkMode ? "active" : ""}
                        
                        >
                            <Moon />
                        </div>
                    </div>
                </li>
            </React.Fragment>
        );
    }
}

export default function() {
    const data = useStaticQuery(graphql`
        query NavbarLinkQuery {
            site {
                siteMetadata {
                    navLinks {
                        name
                        url
                    }
                    darkmode
                    switchTheme
                }
            }
        }
    `);
    const items = data.site.siteMetadata.navLinks;
    let list = [];

    items.forEach(function(e, i) {
        list.push(<ListItem key={e.url + "-" + i} data={e} />);
    });

    list.push(<SearchIcon key="search" />);

    if (data.site.siteMetadata.switchTheme) {
        list.push(
            <ThemeSwitchButton
                key="themeswitcher"
                darkmode={data.site.siteMetadata.darkmode}
            />
        );
    }

    return <ul className="navbar-links">{list}</ul>;
}
