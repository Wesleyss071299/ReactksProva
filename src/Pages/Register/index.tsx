import { useState } from 'react'
import api from "../../services/api";
import Card from "../../components/Card";
import Logo from "../../components/Logo";
import {
  Container,
  FormContainer,
  Input,
  LinkItem,
  RegisterButton,
} from "./styles";
import { IconSaveButton } from "../../components/Cart/styles";
import useInput from "../../hooks/use-input";

interface IResponse {
    data : Idata [],
    status: number

}
interface Idata {
  message: string
}

const Register = () => {
  const [errors, setErrors] = useState<string>()

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangedHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (
      !enteredEmailIsValid ||
      !enteredPasswordIsValid ||
      !enteredNameIsValid
    ) {
      return;
    }

    await api
      .post("users", {
        username: enteredName,
        email: enteredEmail,
        password: enteredPassword,
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response);
          error.response.data.map((item : Idata) => setErrors(item.message))
        }
      });
      console.log(errors)
    resetNameInput();
    resetEmailInput();
    resetPasswordInput();
  };

  return (
    <Container>
      <Logo />
      <FormContainer>
        <h2>Registration</h2>
        <Card onSubmit={formSubmissionHandler}>
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
          <hr />
          <Input
            value={enteredPassword}
            onChange={passwordChangedHandler}
            onBlur={passwordBlurHandler}
            placeholder="Password"
            type="password"
          />
          {passwordInputHasError && (
            <p style={{ color: "red" }}>Please enter a valid password.</p>
          )}
          <hr />
          <RegisterButton disabled={!formIsValid}>
            <h1>
              Register
              <IconSaveButton
                width="28px"
                height="28px"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </IconSaveButton>
            </h1>
          </RegisterButton>
        </Card>
        <LinkItem to="/">
          <h2>
            <IconSaveButton
              style={{ transform: `rotate(180deg)`, marginRight: 6 }}
              width="28px"
              height="28px"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </IconSaveButton>
            Back
          </h2>
        </LinkItem>
      {errors &&  <p style={{ color: "red", justifyContent: 'center', alignItems: 'center', display: 'flex' }}>{errors}</p>}
      </FormContainer>
    </Container>
  );
};

export default Register;
