import styled from 'styled-components';

export const FormTitle = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 8px;
`

export const FormSubTitle = styled(FormTitle)`
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 35px;
`

export const FormLinkAlt = styled(FormSubTitle)`
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    margin: 0;

    color: #E5E044;
`

export const FormLink = styled(FormLinkAlt)`
    font-size: 14px;
    line-height: 19px;

    color: #23DD7A;

    &:hover {
        text-decoration: underline;
    }
`
