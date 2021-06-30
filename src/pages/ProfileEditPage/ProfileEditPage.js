import React, { useState } from 'react';
import { Main, ContainerForm, Input, SendButton } from './style'
import { useHistory } from 'react-router-dom';
import useForm from '../../hooks/useForm'
import { editProfile } from '../../services/profile';
import { CircularProgress } from '@material-ui/core'
import Header from '../../components/Header/Header';
import { goBack } from '../../routes/coordinator';


const SignUpPage = () => {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const [form, onChange, clear] = useForm({
        name: "",
        email: "",
        cpf: "",
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        editProfile(form, history, setLoading)
        clear()
    }


    return (
        <Main>
            <Header
                buttonLeft={() => goBack(history)}
                title={'Editar Perfil'}
            />
            <ContainerForm onSubmit={onSubmitForm}>
                <Input
                    type='text'
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    required
                    label="Nome"
                    placeholder="Nome e sobrenome"
                    variant="outlined" />
                <Input
                    type='email'
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                    label="E-mail"
                    placeholder="email@email.com"
                    variant='outlined' />
                <Input
                    inputProps={{
                        maxLength: 14,
                        pattern: `([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})`
                    }}
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    required
                    label="CPF"
                    placeholder="000.000.000-00"
                    variant="outlined" />
                <SendButton
                    type='submit'
                    variant="contained"
                    color="primary">
                    {loading ? <CircularProgress color={'inherit'} size={24} /> : 'Salvar'}
                </SendButton>
            </ContainerForm>
        </Main>
    );
};

export default SignUpPage;