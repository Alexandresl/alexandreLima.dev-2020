import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import PostCategoryItem from "../PostCategoryItem";
import * as S from "./styled";

const PostCategory = () => {
    const { allMarkdownRemark } = useStaticQuery(graphql`
        query CategoryList {
            allMarkdownRemark {
                group(field: frontmatter___category) {
                    edges {
                        node {
                            frontmatter {
                                category
                                background
                            }
                        }
                    }
                }
            }
        }
    `);

    const categoryList = allMarkdownRemark.group;
    return (
        <>
            <S.categories>Categorias</S.categories>
            <S.CategoryWrapper>
                <S.CategoryList>
                    {categoryList.map(
                        ({
                            edges: [
                                {
                                    node: {
                                        frontmatter: { background, category }
                                    }
                                }
                            ]
                        }) => (
                            <PostCategoryItem
                                category={category}
                                background={background}
                            />
                        )
                    )}
                </S.CategoryList>
            </S.CategoryWrapper>
            <S.Separator></S.Separator>
        </>
    );
};

export default PostCategory;
