import Card from '../../components/Card';
import Navbar from '../../components/Navbar'
import { Container, Input, SaveButton } from './styles';
import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import useInput from '../../hooks/use-input';
import MessageBox from '../../components/MessageBox';
import Loader from 'react-loader-spinner';


interface IUser {
    username: string;
    email: string;
}

const Account = () => {
    const [user, setUser] = useState<IUser>()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)

    useEffect(() => {
        setLoading(true)
        const fetchUser = async () => {
            const token = localStorage.getItem('token')
            const response = await api.get<IUser>('users', { headers :  {"Authorization" : `Bearer ${token}`} })
            setUser({email: response.data.email, username: response.data.username})
        }
        fetchUser()
        setLoading(false)
    }, [user])

    const {
        value: enteredName,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredPassword,
        valueChangeHandler: passwordChangedHandler,
        inputBlurHandler: passwordBlurHandler,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
      } = useInput((value) => value.includes("@"));

    const formSubmissionHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true)
        setError('')
        setSuccess('')
        const token = localStorage.getItem('token')
        const data: any = {}
        if (enteredEmail !== '') {
            data.email = enteredEmail
        }
        if (enteredName !== '') {
            data.username = enteredName
        }
        if (enteredPassword !== '') {
            data.password = enteredPassword
        }
        try {
            await api.put('users', data, { headers :  {"Authorization" : `Bearer ${token}`} })
            setSuccess('Alterado com suceeso')
        } catch (error) {
            setError('Algo de errado aconteceu')
        }
        
        console.log(enteredName)
        console.log(enteredEmail)
        setLoading(false)
    };
    
    return(
        <>
        <Navbar/>
        <Container>
            <div>
                <h2>Username: {user?.username}</h2>   
                <h2>Email: {user?.email}</h2>   
                {error && <MessageBox title={error} color='red'/>} 
                {success && <MessageBox title={success} color='green'/>} 
            </div>
            <Card onSubmit={formSubmissionHandler}>
                <Input
                    value={enteredName}
                    onChange={nameChangedHandler}
                    onBlur={nameBlurHandler}
                    placeholder="New username"
                    type="text"
                />
                {nameInputHasError && (
                    <p style={{ color: "red" }}>Please enter a valid name.</p>
                )}
                <hr />
                <Input
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    placeholder="New email"
                    type="email"
                />
                {emailInputHasError && (
                    <p style={{ color: "red" }}>Please enter a valid email.</p>
                )}
                <hr />
                <Input
                    value={enteredPassword}
                    onChange={passwordChangedHandler}
                    onBlur={passwordBlurHandler}
                    placeholder="New password"
                    type="password"
                />
                <hr />
                <SaveButton>
                    <h1>
                        Save
                        {loading && <Loader type="Oval" color="#27c383" height={20} width={20} />}
                    </h1>
                </SaveButton>

            </Card>
        </Container>
        </>
    )
}

export default Account;