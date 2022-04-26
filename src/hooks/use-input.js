import { useState } from "react";

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue]= useState('');
    const [enterValueTouched, setEnteredValueTouched] = useState(false);

    const enteredValueIsValid = validateValue(enteredValue);
    const hasError = !enteredValueIsValid && enterValueTouched;

    const onChangeHandler= (event) => {
        console.log("name",event.target.value);
        setEnteredValue(event.target.value);
      }

    const onBlurHandler = (event)=>{
        setEnteredValueTouched(true);
      }

      const reset= ()=>{
        setEnteredValue('');
        setEnteredValueTouched(false);
      }

      const inputFieldClassAssignMent = (invalidClassName, validClassName)=> {
        return hasError ? invalidClassName :  validClassName;
      }

      return {
        enteredValue: enteredValue,
        enterValueTouched:enterValueTouched,
        enteredValueIsValid:enteredValueIsValid,
        hasError:hasError,
        onChangeHandler:onChangeHandler,
        onBlurHandler:onBlurHandler,
        reset:reset,
        inputFieldClassAssignMent:inputFieldClassAssignMent

      }
}

export default useInput;