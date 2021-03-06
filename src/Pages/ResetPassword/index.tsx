import Card from '../../components/Card';
import Logo from '../../components/Logo';
import { IconSaveButton} from '../../components/Cart/styles'
import { Container, Input, FormContainer, ResetButton, LinkItem } from './styles';
import useInput from '../../hooks/use-input';
import { useParams } from "react-router-dom";
import api from '../../services/api';

interface ParamTypes {
    token: string;
}
  

const ResetPassword = () => {
    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasError: passwordInputHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPasswordInput,
    } = useInput((value) => value.trim() !== '');

    let formIsValid = false;

    if (enteredPasswordIsValid) {
      formIsValid = true;
    }
    const { token } = useParams<ParamTypes>()     

    const formSubmissionHandler = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!enteredPasswordIsValid) {
          return;
        }
         
        console.log(token)
        await api.post('reset', {password: enteredPassword, token: token})
        resetPasswordInput();
    };

    return(
        <Container>
            <Logo/>
            <FormContainer>
            <h2>Reset password</h2>
                <Card onSubmit={formSubmissionHandler}>
                    <Input value={enteredPassword} onChange={passwordChangeHandler} onBlur={passwordBlurHandler} type="password" placeholder="New Password"/>
                    {passwordInputHasError && (<p style={{color: 'red'}}>Please enter a valid password.</p>)}
                    <hr/>
                    <ResetButton type='submit' disabled={!formIsValid}>
                        <h1>
                            Change password
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
            </FormContainer>
        </Container>
    )
} 

export default ResetPassword;