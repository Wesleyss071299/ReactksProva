import { useEffect } from 'react';
import Card from '../../components/Card';
import Logo from '../../components/Logo';

import { IconSaveButton} from '../../components/Cart/styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loginUser, authActions } from '../../store/auth-slice';
import { Container, Input, FormContainer, LinkItem, LoginButton} from './styles';
import useInput from '../../hooks/use-input';
import {useHistory} from 'react-router-dom';
import MessageBox from '../../components/MessageBox';

const SignIn = () => {
    const history = useHistory();
    const {errorMessage, isError} = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch();

    useEffect(() => {
        return () => {
          dispatch(authActions.clearState());
        };
    }, [dispatch]);

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput,
      } = useInput((value) => value.trim() !== '');
      
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
      } = useInput((value) => value.includes('@'));

      let formIsValid = false;

      if (enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true;
      }

      const formSubmissionHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!enteredEmailIsValid || !enteredPasswordIsValid) {
            return;
        } 

        const resultAction = await dispatch(loginUser({email: enteredEmail, password: enteredPassword}))
        if  (loginUser.fulfilled.match(resultAction)) {
            history.push('/bets')       
            resetEmailInput();
            resetPasswordInput();
        }

    };

    return(
        <Container>
            <Logo/>
            <FormContainer>
                <h2>Authentication</h2>
                <Card onSubmit={formSubmissionHandler} >       
                    <Input value={enteredEmail} type="email" onChange={emailChangeHandler} onBlur={emailBlurHandler}  placeholder="Email"/>
                    {emailInputHasError && (<p style={{color: 'red'}}>Please enter a valid email.</p>)}
                    <hr/>
                    <Input value={enteredPassword} type="password" placeholder="Password" onChange={passwordChangedHandler} onBlur={passwordBlurHandler}/>
                    {passwordInputHasError && (<p style={{color: 'red'}}>Please enter a valid password.</p>)}
                    <hr/>
                    <LinkItem to="/forgot">
                        <p>I forget my password</p>
                    </LinkItem>
                    <LoginButton type="submit" disabled={!formIsValid}>
                        <h1>
                        Log In 
                            <IconSaveButton  width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </IconSaveButton>
                        </h1>
                    </LoginButton>
                </Card>
                <LinkItem to="/register">
                    <h2>
                        Sign Up
                        <IconSaveButton  width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </IconSaveButton>
                    </h2>
                </LinkItem>
            {isError && <MessageBox title={errorMessage} color="red"/>}
            </FormContainer>
        </Container>                
    )
}

export default SignIn;