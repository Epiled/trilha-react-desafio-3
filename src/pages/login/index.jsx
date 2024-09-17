import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";

import { Row, Container, Button } from './styles';
import { FormLink, FormLinkAlt } from "../../components/FormInUp/FormTexts/style";
import { FormContainer } from "../../components/FormInUp";

const Login = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);

            if (data.length && data[0].id) {
                navigate('/feed');
                return;
            }

            alert('Usuário ou senha inválido');
        } catch (e) {
            //TODO: HOUVE UM ERRO
            alert("Algo deu errado não foi possível efetuar o login");
        }
    };

    const handleClickSignUp = () => {
        navigate('/register');
    }

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <FormContainer
                pageTitle={"A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas."}
                formTitle={"Faça seu cadastro"}
                formSubTitle={"Faça seu login e make the change._"}
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" leftIcon={<MdEmail color="#8647AD" />} name="email" control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Password" leftIcon={<MdLock color="#8647AD" />} name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button variant="secondary" type="submit">Entrar</Button>
                </form>
                <Row>
                    <FormLinkAlt>Esqueci minha senha</FormLinkAlt>
                    <FormLink onClick={handleClickSignUp}>Criar Conta</FormLink>
                </Row>
            </FormContainer>
        </Container>
    </>)
}

export { Login }
