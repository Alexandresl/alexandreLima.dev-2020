import React from "react";
import { Link } from "gatsby";

import * as S from "./styled";

const PostCategory = () => {
    return (
        <>
            <S.categories>Categorias</S.categories>
            <S.CategoryWrapper>
                <S.CategoryList>
                    <S.CategoryItem background="#7d669e">
                        <Link to="/">CSS</Link>
                    </S.CategoryItem>
                    <S.CategoryItem background="#7AAB13">
                        <Link to="/">SVG</Link>
                    </S.CategoryItem>
                    <S.CategoryItem background="#d6ba32">
                        <Link to="/">DEV</Link>
                    </S.CategoryItem>
                    <S.CategoryItem background="#61728f">
                        <Link to="/">JS</Link>
                    </S.CategoryItem>
                    <S.CategoryItem background="#24809e">
                        <Link to="/">MISC</Link>
                    </S.CategoryItem>
                    <S.CategoryItem background="#47650b">
                        <Link to="/">NODEJS</Link>
                    </S.CategoryItem>
                    <S.CategoryItem background="#7AAB13">
                        <Link to="/">SVG</Link>
                    </S.CategoryItem>
                    <S.CategoryItem background="#b31917">
                        <Link to="/">JAVASCRIPT</Link>
                    </S.CategoryItem>
                    <S.CategoryItem background="#7d669e">
                        <Link to="/">JS</Link>
                    </S.CategoryItem>
                </S.CategoryList>
            </S.CategoryWrapper>
            <S.Separator></S.Separator>
        </>
    );
};

export default PostCategory;
