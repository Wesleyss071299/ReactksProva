import Card from '../../components/Card';
import Navbar from '../../components/Navbar'
import { Container } from './styles';

const Account = () => {
    return(
        <>
        <Navbar/>
        <Container>
            <Card onSubmit={() => {}}>
                <h2>Name</h2>
                <hr/>
                <h2>Email</h2>
                <hr/>
                <h2>Password</h2>
            </Card>
        </Container>
        </>
    )
}

export default Account;