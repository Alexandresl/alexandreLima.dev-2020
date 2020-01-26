import React from "react";

import PostCategoryItem from "../PostCategoryItem";
import * as S from "./styled";

const PostCategory = () => {
    return (
        <>
            <S.categories>Categorias</S.categories>
            <S.CategoryWrapper>
                <S.CategoryList>
                    <PostCategoryItem />
                </S.CategoryList>
            </S.CategoryWrapper>
            <S.Separator></S.Separator>
        </>
    );
};

export default PostCategory;
