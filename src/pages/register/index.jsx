import { MdEmail, MdLock, MdPerson } from "react-icons/md"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

import { Row, Container, Button } from './styles';
import { FormLink } from "../../components/FormInUp/FormTexts/style"
import { FormContainer } from "../../components/FormInUp"
import { Termos } from "./styles"
import { HandleText } from "./styles"
import { api } from "../../services/api"

const Register = () => {

  const navigate = useNavigate();

  const handleClickSignUp = () => {
    navigate('/login');
  }

  const { control, handleSubmit, formState: { errors } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
  });

  const onSubmit = async (formData) => {
    try {
      const response = await api.post(`/users`, {
          nome: formData.nome,
          email: formData.email,
          senha: formData.senha,
        })

      navigate('/login');
    } catch (error) {
      alert("Algo deu errado não foi possível efetuar o cadastro");
    }
  }

  return (<>
    <Header />
    <Container>
      <FormContainer
        pageTitle={"A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas."}
        formTitle={"Comece agora grátis"}
        formSubTitle={"Crie sua conta e make the change._"}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder="Nome completo" leftIcon={<MdPerson color="#8647AD" />} name="nome" control={control} />
          {errors.nome && <span>Nome é obrigatório</span>}
          <Input placeholder="E-mail" leftIcon={<MdEmail color="#8647AD" />} name="email" control={control} />
          {errors.email && <span>E-mail é obrigatório</span>}
          <Input type="password" placeholder="Password" leftIcon={<MdLock color="#8647AD" />} name="senha" control={control} />
          {errors.senha && <span>Senha é obrigatório</span>}
          <Button variant="secondary" type="submit">Criar minha conta</Button>
        </form>
        <Termos>
          Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
        </Termos>
        <Row>
          <HandleText>Já tenho conta. </HandleText>
          <FormLink onClick={handleClickSignUp}>Fazer Login</FormLink>
        </Row>
      </FormContainer>
    </Container>
  </>)
}

export { Register }
