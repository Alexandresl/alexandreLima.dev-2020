import React from "react";
import { Link } from "gatsby";

import * as S from "./styled";

const PostCategoryItem = props => {
    return (
        <>
            <S.CategoryItem background="#7d669e">
                <Link to="/">MISC</Link>
            </S.CategoryItem>
            <S.CategoryItem background="#7AAB13">
                <Link to="/">JAVASCRIPT</Link>
            </S.CategoryItem>
            <S.CategoryItem background="#d6ba32">
                <Link to="/">JEKYLL</Link>
            </S.CategoryItem>
            <S.CategoryItem background="#61728f">
                <Link to="/">NODEJS</Link>
            </S.CategoryItem>
            <S.CategoryItem background="#b31917">
                <Link to="/">JAVA</Link>
            </S.CategoryItem>
            <S.CategoryItem background="#24809e">
                <Link to="/">CSS</Link>
            </S.CategoryItem>
            <S.CategoryItem background="#47650b">
                <Link to="/">HTML</Link>
            </S.CategoryItem>
            <S.CategoryItem background="#b31917">
                <Link to="/">PYTHON</Link>
            </S.CategoryItem>
            <S.CategoryItem background="#24809e">
                <Link to="/">GATSBY</Link>
            </S.CategoryItem>
            <S.CategoryItem background="#d6ba32">
                <Link to="/">SVG</Link>
            </S.CategoryItem>
        </>
    );
};

export default PostCategoryItem;
