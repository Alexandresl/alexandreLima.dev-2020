import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import SocialLInks from "../components/SocialLinks/index";
import "../style/wall.less";

const IndexPage = () => {
    return (
        <Layout placeholder={false}>
            <SEO
                lang="pt-BR"
                title={`this.props.data.site.siteMetadata.title`}
            />
            <div
                className="wall"
                style={{ height: this.state.winHeight + "px" }}
            >
                <div className="intro container">
                    <div className="main-title text-primary">
                        <img
                            className="logo"
                            src={this.props.data.site.siteMetadata.icon}
                            alt={this.props.data.site.siteMetadata.title}
                            style={{ width: 60 + "px", height: 60 + "px" }}
                        />
                    </div>
                    <p className="tag-line text-secondary">
                        {this.props.data.site.siteMetadata.author}
                    </p>
                    <p className="caption text-tertiary">
                        {this.props.data.site.siteMetadata.introTag}
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

export const query = graphql`
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
`;
