import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import SocialLInks from "../components/SocialLinks/index";

const IndexPage = () => {
    const index = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                    icon
                    logo
                    capitalizeTitleOnHome
                    titleImage
                    introTag
                    description
                }
            }
        }
    `);

    return (
        <Layout placeholder={false}>
            <SEO lang="pt-BR" title={`Home`} />
            <div className="wall">
                <div className="intro container">
                    <div className="main-title text-primary">
                        <img
                            className="logo"
                            src={index.site.siteMetadata.icon}
                            alt={index.site.siteMetadata.title}
                            style={{ width: 60 + "px", height: 60 + "px" }}
                        />
                    </div>
                    <p className="tag-line text-secondary">
                        {index.site.siteMetadata.author}
                    </p>
                    <p className="caption text-tertiary">
                        {index.site.siteMetadata.introTag}
                    </p>
                    <SocialLInks></SocialLInks>
                    <a href="#portfolio" className="btn">
                        Meus Trabalhos
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
