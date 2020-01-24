import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import "../style/post.less";

const BlogPost = ({ data }) => {
    const post = data.markdownRemark;

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <div className="post">
                <div classname="container">
                    <h1>{post.frontmatter.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
                </div>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query Post($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
            }
            html
        }
    }
`;

export default BlogPost;
