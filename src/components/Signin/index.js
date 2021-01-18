import React from 'react'
import { Container, FormWrap, Icon, Form, FormH1,
    FormLabel, Text,
    FormButton, FormContent, FormInput } from './SigninElements'

const SingIn = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to='/'>RedWan IPS</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Ingresa a tu cuenta</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormLabel htmlFor='for'>Contraseña</FormLabel>
                        <FormInput type='password' required />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Olvide mi contraseña</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
            
        </>
    )
}

export default SingIn
