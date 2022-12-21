import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 50px;
    margin: 10px;
    border: 2px solid #141414;
    border-radius: 15px;
    background-color: #efefef;
    transition: all ease .7s;
    cursor: pointer;
    color: #000;

    &:hover {
        width: 900px;
        font-size: 25px;
        border: 5px solid #145c8c;
        color: #145c8c;
    }
`;