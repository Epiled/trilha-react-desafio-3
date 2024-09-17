import styled from 'styled-components';
import { ContainerStyled } from '../../components/Container/style';
import { ButtonContainer } from '../../components/Button/styles';
import { FormLink } from '../../components/FormInUp/FormTexts/style';

export const Container = styled(ContainerStyled)`
    align-items: start;
`

export const Button = styled(ButtonContainer)`
    width: 100%;
    max-width: 280px;
    margin-top: 40px;
    margin-bottom: 25px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10px;
`

export const Termos = styled.p`
    font-family: 'Open Sans';
    font-size: 18px;
    color: #fff;
    width: 370px;
`

export const HandleText = styled(FormLink)`
    color: #fff;
    margin-right: 5px;
`
