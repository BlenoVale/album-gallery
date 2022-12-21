import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-color: #fff;
    border: 3px solid #141414;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        opacity: .6;
    }
`;

export const IMG = styled.img`
    border-radius: 8px;
`;