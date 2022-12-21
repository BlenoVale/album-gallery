import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    border: 2px solid #145c8c;
    border-radius: 8px;

    &:hover {
        opacity: 0.82;
    }
`;

export const Button = styled.div`
    width: 160px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #145c8c;
    font-size: 21px;
    color: #fff;
    border: 3px solid #fff;
    border-radius: 8px;
    cursor: pointer;
`;