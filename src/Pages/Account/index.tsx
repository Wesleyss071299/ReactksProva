import Card from '../../components/Card';
import Navbar from '../../components/Navbar'
import { Container } from './styles';
import { useAppSelector } from '../../store/hooks'
import { useEffect } from 'react';
import api from '../../services/api'



const Account = () => {
    useEffect(() => {
        const loadBets = async () => {
            const token = localStorage.getItem('token')
            const response = await api.get('teste', { headers :  {"Authorization" : `Bearer ${token}`} })
            const data: IBet[] = response.data.map((data) => ({
                id: data.id,
                numbers: data.numbers,
                game_id: data.game_id
            }))
            setBets(prev => [...prev, ...data])
        }
        loadBets()
    }, [])
    return(
        <>
        <Navbar/>
        <Container>
            <Card onSubmit={() => {}}>
                <h2>Name</h2>
                <hr/>
                <h2>{userEmail}</h2>
                <hr/>
                <h2>Password</h2>
            </Card>
        </Container>
        </>
    )
}

export default Account;