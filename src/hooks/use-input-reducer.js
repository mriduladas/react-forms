import { useReducer, useState } from "react";

const initialInputState ={
  value: '',
  isTouched: false
}

const inputStateReducer =(state, action)=> {
  if(action.type==='INPUT'){
    return {value: action.value, isTouched: state.isTouched};
  }if (action.type==='BLUR'){
    return {isTouched:true, value: state.value};
  }if (action.type==='RESET'){
    return initialInputState
  }
  return initialInputState;
}

const useInputReducer = (validateValue) => {

    const [inputState, dispatch]= useReducer(inputStateReducer,initialInputState);

    const enteredValueIsValid = validateValue(inputState.value);
    const hasError = !enteredValueIsValid && inputState.isTouched;

    const onChangeHandler= (event) => {
        console.log("name",event.target.value);
        dispatch({type:'INPUT', value: event.target.value});
      }

    const onBlurHandler = (event)=>{
      dispatch({type:'BLUR'});
      }

      const reset= ()=>{
        dispatch({type:'RESET'})
      }

      const inputFieldClassAssignMent = (invalidClassName, validClassName)=> {
        return hasError ? invalidClassName :  validClassName;
      }

      return {
        enteredValue: inputState.value,
        enterValueTouched:inputState.isTouched,
        enteredValueIsValid:enteredValueIsValid,
        hasError:hasError,
        onChangeHandler:onChangeHandler,
        onBlurHandler:onBlurHandler,
        reset:reset,
        inputFieldClassAssignMent:inputFieldClassAssignMent

      }
}

export default useInputReducer;