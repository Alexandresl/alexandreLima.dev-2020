import React from "react";
import propTypes from "prop-types";
import * as S from "./styled";

const RecommendedPosts = ({ next, previous }) => (
    <S.RecommendedWrapper>
        {previous && (
            <S.RecommendedLink to={previous.fields.slug} className="previous" 
            fade
            >
                {previous.frontmatter.title}
            </S.RecommendedLink>
        )}
        {!previous && <S.RecommendedBox />}
        {next && (
            <S.RecommendedLink to={next.fields.slug} className="next"
            fade
            >
                {next.frontmatter.title}
            </S.RecommendedLink>
        )}
        {!next && <S.RecommendedBox />}
    </S.RecommendedWrapper>
);

RecommendedPosts.propTypes = {
    next: propTypes.shape({
        frontmatter: propTypes.shape({
            title: propTypes.string.isRequired
        }),
        fields: propTypes.shape({
            slug: propTypes.string.isRequired
        })
    }),
    previous: propTypes.shape({
        frontmatter: propTypes.shape({
            title: propTypes.string.isRequired
        }),
        fields: propTypes.shape({
            slug: propTypes.string.isRequired
        })
    })
};

export default RecommendedPosts;
