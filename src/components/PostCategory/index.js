import React from "react";
import { Link } from "gatsby";

import * as S from "./styled";

const PostCategory = () => {
    return (
        <>
            <S.categories>Categorias</S.categories>
            <S.CategoryWrapper>
                <S.CategoryList>
                    <S.CategoryItem>
                        <Link to="">CSS</Link>
                    </S.CategoryItem>
                    <S.CategoryItem>
                        <Link to="">SVG</Link>
                    </S.CategoryItem>
                    <S.CategoryItem>
                        <Link to="">DEV</Link>
                    </S.CategoryItem>
                    <S.CategoryItem>
                        <Link to="">JS</Link>
                    </S.CategoryItem>
                    <S.CategoryItem>
                        <Link to="">MISC</Link>
                    </S.CategoryItem>
                    <S.CategoryItem>
                        <Link to="">CSS</Link>
                    </S.CategoryItem>
                    <S.CategoryItem>
                        <Link to="">SVG</Link>
                    </S.CategoryItem>
                    <S.CategoryItem>
                        <Link to="">DEV</Link>
                    </S.CategoryItem>
                    <S.CategoryItem>
                        <Link to="">JS</Link>
                    </S.CategoryItem>
                </S.CategoryList>
            </S.CategoryWrapper>
            <S.Separator></S.Separator>
        </>
    );
};

export default PostCategory;
