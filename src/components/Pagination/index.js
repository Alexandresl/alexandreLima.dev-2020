import React from "react";
import propTypes from "prop-types";
import Anilink from 'gatsby-plugin-transition-link/Anilink'

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
        {!isFirst && <Anilink to={prevPage} cover
            direction="down"
            duration={1} 
            bg="var(--background)" >&larr; Página anterior</Anilink>}

        <p>
            {currentPage} de {numPages}
        </p>

        {!isLast && <Anilink to={nextPage} cover
            direction="down"
            duration={1}
            bg="var(--background)" >Próxima página &rarr;</Anilink>}
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
