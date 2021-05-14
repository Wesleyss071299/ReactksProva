import Card from '../../components/Card'
import Logo from '../../components/Logo'
import { IconSaveButton} from '../../components/Cart/styles'
import { Container, Input, FormContainer, LinkItem} from './styles'

const SignIn = () => {
    return(
        <Container>
            <Logo/>
            <FormContainer>
                <h2>Authentication</h2>
                <Card>       
                    <Input value="Email"/>
                    <hr/>
                    <Input value="Password"/>
                    <hr/>
                    <LinkItem to="/reset">
                        <p>I forget my password</p>
                    </LinkItem>
                    <LinkItem to="/bets">
                        <h1>
                        Log In 
                            <IconSaveButton  width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </IconSaveButton>
                        </h1>
                    </LinkItem>
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
        </Container>                
    )
}

export default SignIn;