import { useState } from 'react';
import Card from '../../components/Card';
import Logo from '../../components/Logo';
import { IconSaveButton} from '../../components/Cart/styles'
import { Container, Input, FormContainer, LinkItem, ResetButton } from './styles';
import useInput from '../../hooks/use-input';
import api from '../../services/api';
import Error from '../../components/Error';


interface IData {
    error: {
        message: string
    }
}

const ForgotPassword = () => {
    const [error, setError] = useState<string | null >(null)

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput((value) => value.includes('@'));

    let formIsValid = false;

    if (enteredEmailIsValid) {
      formIsValid = true;
    }

    const formSubmissionHandler = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('')
        if (!enteredEmailIsValid) {
          return;
        }       
        // await api.post('/passwords', {email: enteredEmail, redirect_url: "http://localhost:3000/reset"}).then(response => {
        //     setError('Email Enviado')
        // }).catch((error) => {
        //     setError(error.response.data.error.message)
        // })
        try {
            const response = await api.post<IData>('/passwords', {email: enteredEmail, redirect_url: "http://localhost:3000/reset"})
        } catch (error) {
            setError(error.response.data.error.message)
           
        }
        resetEmailInput();
    };

    return(
        <Container>
            <Logo/>
            <FormContainer>
            <h2>Reset password</h2>
                <Card onSubmit={formSubmissionHandler}>
                    <Input value={enteredEmail} onChange={emailChangeHandler} onBlur={emailBlurHandler} type="email" placeholder="Email"/>
                    {emailInputHasError && (<p style={{color: 'red'}}>Please enter a valid email.</p>)}
                    <hr/>
                    <ResetButton type='submit' disabled={!formIsValid}>
                        <h1>
                            Send link 
                            <IconSaveButton width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </IconSaveButton>
                        </h1>
                    </ResetButton>
                </Card>
                <LinkItem to="/">
                    <h2>
                        <IconSaveButton  style={{transform: `rotate(180deg)`, marginRight: 6}} width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </IconSaveButton>
                        Back
                    </h2>
                </LinkItem>
               {error && <Error title={error} />} 
            </FormContainer>
        </Container>
    )
} 

export default ForgotPassword;