import { ContainerStyled } from "./style"

export const Container = ({children}) => {
  return(
    <ContainerStyled>
      {children}
    </ContainerStyled>
  )
}