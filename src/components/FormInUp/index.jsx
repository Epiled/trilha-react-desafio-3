import React from "react"
import { Column, Wrapper, ContainerForm } from "./styles"
import { FormSubTitle, FormTitle } from "./FormTexts/style"
import { PageTitle } from "./PageTitle/style"

const FormContainer = ({ pageTitle, formTitle, formSubTitle, children }) => {
  return (
    <>
      <Column>
        <PageTitle>
          {pageTitle}
        </PageTitle>
      </Column>
      <Column>
        <Wrapper>
          <FormTitle>{formTitle}</FormTitle>
          <FormSubTitle>{formSubTitle}</FormSubTitle>
          <ContainerForm>
            {children}
          </ContainerForm>
        </Wrapper>
      </Column>
    </>
  )
}

export { FormContainer };
