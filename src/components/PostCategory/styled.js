import styled from "styled-components";

export const categories = styled.h2`
    display: block;
    width: 100%;
    color: var(--textSecondary);
    text-align: left;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    padding: 1rem 2rem 0;
`;

export const CategoryWrapper = styled.div`
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: center;
    padding: 2rem 0;
`;

export const CategoryList = styled.ul`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    list-style: none;
    padding: 0 2rem;
`;

export const Separator = styled.div`
    width: 100%;
    height: 2px;
    display: block;

    background: linear-gradient(
        to left,
        rgba(63, 91, 186, 0.3) 0%,
        rgba(245, 85, 85, 0.3) 90%
    );
`;
