import styled from "styled-components";

export const ContainerStyled = styled.main`
    width: -webkit-fill-available;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 73px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 1280px) {
        max-width: 1280px;
        padding: 0px 60px;
    }
`
