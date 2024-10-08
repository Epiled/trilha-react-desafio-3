import styled from 'styled-components';
import { ContainerStyled } from '../../components/Container/style';
import { ButtonContainer } from '../../components/Button/styles';

export const Container = styled(ContainerStyled)`
    align-items: start;
`

export const Button = styled(ButtonContainer)`
    width: 100%;
    max-width: 280px;
    margin-top: 40px;
    margin-bottom: 45px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
