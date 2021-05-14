import Card from '../../components/Card'
import Logo from '../../components/Logo'
import { Container, FormContainer, Input, LinkItem} from './styles';
import { IconSaveButton} from '../../components/Cart/styles';


const Register = () => { 
    return(
    <Container>
        <Logo />
        <FormContainer>
            
            <h2>Registration</h2>
                <Card>       
                    <Input value="Name"/>
                    <hr/>
                    <Input value="Email"/>
                    <hr/>
                    <Input value="Password"/>
                    <hr/>
                    <h1>
                        Register 
                        <IconSaveButton  width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </IconSaveButton>
                    </h1>
                </Card>
                <LinkItem to="/">
                    <h2>
                        <IconSaveButton style={{transform: `rotate(180deg)`, marginRight: 6}} width="28px" height="28px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </IconSaveButton>
                        Back
                    </h2>
                </LinkItem>
        </FormContainer>
    </Container>
    )

}

export default Register;