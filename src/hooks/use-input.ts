import React, { useReducer } from 'react';

type State = {
    value: string,
    isTouched: boolean
}
enum ActionKind {
    Input = 'INPUT',
    Blur = 'BLUR',
    Reset = 'RESET'
}

type Action = {
    type: ActionKind,
    value?: string
}

const initialInputState: State = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state: State , action: Action): State => {
  if (action.type === 'INPUT') {
    return { value: action.value as string, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };
  }
  return state;
};

const useInput = (validateValue: (value: string) => boolean) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionKind.Input, value: event.target.value });
  };

  const inputBlurHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionKind.Blur });
  };

  const reset = () => {
    dispatch({ type: ActionKind.Reset });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;