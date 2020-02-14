import React from "react";
import propTypes from "prop-types";
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import * as S from "./styled";

const Pagination = ({
    isFirst,
    isLast,
    currentPage,
    numPages,
    prevPage,
    nextPage
}) => (
    <S.PaginationWrapper>
        {!isFirst && <AniLink to={prevPage} fade >&larr; Página anterior</AniLink>}

        <p>
            {currentPage} de {numPages}
        </p>

        {!isLast && <AniLink to={nextPage} fade >Próxima página &rarr;</AniLink>}
    </S.PaginationWrapper>
);

Pagination.propTypes = {
    isFirst: propTypes.bool.isRequired,
    isLast: propTypes.bool.isRequired,
    currentPage: propTypes.number.isRequired,
    numPages: propTypes.number.isRequired,
    prevPage: propTypes.string.isRequired,
    nextPag: propTypes.string
};

export default Pagination;
