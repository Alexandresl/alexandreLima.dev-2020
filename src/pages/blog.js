import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import PostItem from "../components/PostItem";

import "../style/blog.less";

const IndexPage = () => {
    const { allMarkdownRemark } = useStaticQuery(graphql`
        query PostList {
            allMarkdownRemark(
                sort: { fields: frontmatter___date, order: DESC }
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            date(
                                locale: "pt-br"
                                formatString: "DD [de] MMMM [de] YYYY"
                            )
                            description
                            title
                            category
                            background
                        }
                        timeToRead
                    }
                }
            }
        }
    `);

    const postList = allMarkdownRemark.edges;

    return (
        <Layout placeholder={false}>
            <SEO lang="pt-BR" title="Blog" />
            <div className="blog">
                <div className="container">
                    {postList.map(
                        ({
                            node: {
                                frontmatter: {
                                    background,
                                    category,
                                    date,
                                    description,
                                    title
                                },
                                timeToRead,
                                fields: { slug }
                            }
                        }) => (
                            <PostItem
                                slug={slug}
                                background={background}
                                category={category}
                                date={date}
                                timeToRead={timeToRead}
                                title={title}
                                description={description}
                            />
                        )
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default IndexPage;
