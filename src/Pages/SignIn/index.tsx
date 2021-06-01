import Card from '../../components/Card';
import Logo from '../../components/Logo';

import { IconSaveButton} from '../../components/Cart/styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Login } from '../../store/auth-actions';
import { loginUser } from '../../store/auth-slice';
import { Container, Input, FormContainer, LinkItem, LoginButton} from './styles';
import useInput from '../../hooks/use-input';
import {useHistory} from 'react-router-dom';
import Error from '../../components/Error';

const SignIn = () => {
    const history = useHistory();
    const {errorMessage, isError} = useAppSelector((state) => state.auth)
    const dispatch = useAppDispatch();

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
        resetEmailInput();
        resetPasswordInput();
       // dispatch(Login({email: enteredEmail, password: enteredPassword}))          
        dispatch(loginUser({email: enteredEmail, password: enteredPassword}))          
        console.log(isError.valueOf)
        //history.push('/bets')
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
            </FormContainer>
            {isError && <Error title={errorMessage}/>}
        </Container>                
    )
}

export default SignIn;