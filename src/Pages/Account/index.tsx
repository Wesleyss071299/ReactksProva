import Card from '../../components/Card';
import Navbar from '../../components/Navbar'
import { Container, Input } from './styles';
import { useEffect, useState } from 'react';
import api from '../../services/api'
import useInput from '../../hooks/use-input';


interface IUser {
    username: string;
    email: string;
}

const Account = () => {
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token')
            const response = await api.get<IUser>('users', { headers :  {"Authorization" : `Bearer ${token}`} })
            setUser({email: response.data.email, username: response.data.username})
        }
        fetchUser()
    }, [])

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
      } = useInput((value) => value.includes("@"));

    return(
        <>
        <Navbar/>
        <Container>
            <Card onSubmit={() => {}}>
          <Input
            value={enteredName}
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            placeholder="Name"
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
            placeholder="Email"
            type="email"
          />
          {emailInputHasError && (
            <p style={{ color: "red" }}>Please enter a valid email.</p>
          )}
            </Card>
        </Container>
        </>
    )
}

export default Account;