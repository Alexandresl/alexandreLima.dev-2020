import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as S from "./styled";

export default function() {
    const query = useStaticQuery(graphql`
        query LogoQuery {
            site {
                siteMetadata {
                    title
                    logo
                }
            }
        }
    `);
    return (
        <S.Logo
            className="logo"
            src={query.site.siteMetadata.logo}
            title={query.site.siteMetadata.title}
            alt={query.site.siteMetadata.title}
        />
    );
}
