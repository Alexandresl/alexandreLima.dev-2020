import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "../style/wall.less";

class IndexPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            winHeight: "100vh"
        };
    }

    setWindowHeight() {
        this.setState({
            winHeight: window.innerHeight
        });
    }

    render() {
        return (
            <Layout placeholder={false}>
                <SEO
                    lang="en"
                    title={this.props.data.site.siteMetadata.title}
                />
                <div
                    className="wall"
                    style={{ height: this.state.winHeight + "px" }}
                >
                    <div className="intro container">
                        <div className="main-title text-primary">
                            <img
                                className="logo"
                                src={this.props.data.site.siteMetadata.logo}
                                alt={this.props.data.site.siteMetadata.title}
                                style={{ width: 60 + "px", height: 60 + "px" }}
                            />
                        </div>
                        <p className="tag-line text-secondary">
                            {this.props.data.site.siteMetadata.introTag}
                        </p>
                        <p className="caption text-tertiary">
                            {this.props.data.site.siteMetadata.description}
                        </p>
                        <a href="#portfolio" className="btn">
                            SEE WORKS
                        </a>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default IndexPage;

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
                logo
                capitalizeTitleOnHome
                titleImage
                introTag
                description
            }
        }
    }
`;
