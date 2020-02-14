import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Location } from "@reach/router";

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

export default function() {
    const data = useStaticQuery(graphql`
        query NavbarLinkQueryFooter {
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

    return <ul className="navbar-links">{list}</ul>;
}
