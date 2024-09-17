import styled from 'styled-components';
import { Container as ContainerStyled } from "../../components/Container";

export const Container = styled(ContainerStyled)`
    align-items: start;
`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 24px;
`

export const TitleHighlight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF70;
    margin-bottom: 24px;

`

export const Column = styled.div`
    flex:${({flex}) => flex};
    padding-right: 24px;

`
