import styled from "styled-components";

export const categories = styled.h2`
    display: block;
    width: 100%;
    color: #3f5bba;
    text-align: left;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    font-weight: 100;
    padding: 0 2rem;
`;

export const CategoryWrapper = styled.div`
    width: 100%;
    min-height: 50px;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
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
    height: 1px;
    display: block;
    background: rgb(63, 91, 186);
    background: linear-gradient(
        to left,
        rgba(63, 91, 186, 0.2) 0%,
        rgba(245, 85, 85, 0.2) 35%
    );
`;
