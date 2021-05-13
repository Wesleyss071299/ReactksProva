import Card from '../../components/Card';
import Logo from '../../components/Logo';
import { IconSaveButton} from '../../components/Cart/styles'
import { Container, Input, FormContainer } from './styles';

const ResetPassword = () => {
    return(
        <Container>
            <Logo/>
            <FormContainer>
            <h2>Reset password</h2>
                <Card>
                    <Input value="Email"/>
                    <hr/>
                    <h1>
                        Send link 
                        <IconSaveButton width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </IconSaveButton>
                    </h1>
                </Card>
                <h2>
                    <IconSaveButton  style={{transform: `rotate(180deg)`, marginRight: 6}} width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </IconSaveButton>
                    Back
                </h2>
            </FormContainer>
        </Container>
    )
} 

export default ResetPassword;