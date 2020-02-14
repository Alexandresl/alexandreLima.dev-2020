import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import SEO from "../components/seo";
import PostItem from "../components/PostListItem";
// import PostCategory from "../components/PostCategory";

import Pagination from "../components/Pagination";

import "../style/blog.less";

const BlogList = props => {
    const postList = props.data.allMarkdownRemark.edges;
    const { currentPage, numPages } = props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage =
        currentPage - 1 === 1 ? "/blog" : `/blog/${currentPage - 1}`;
    const nextPage = `/blog/${currentPage + 1}`;

    return (
        <Layout placeholder={false}>
            <SEO lang="pt-BR" title="Blog" />
            <div className="blog">
                <div className="container">
                    {/* <PostCategory /> */}
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
                                id,
                                fields: { slug }
                            }
                        }) => (
                            <PostItem
                                key={id}
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

            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage}
                numPages={numPages}
                prevPage={prevPage}
                nextPage={nextPage}
            />
        </Layout>
    );
};

export const query = graphql`
    query PostList($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            limit: $limit
            skip: $skip
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
                    id
                }
            }
        }
    }
`;

export default BlogList;
