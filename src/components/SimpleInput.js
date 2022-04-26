import {useState } from "react";
import useInput from "../hooks/use-input";


const SimpleInput = (props) => {

  const {
    enteredValue: enteredName,
    enterValueTouched:enterNameTouched,
    enteredValueIsValid:enteredNameIsValid,
    hasError:enteredNameHasError,
    onChangeHandler:onChangeNameHandler,
    onBlurHandler:onBlurNameHandler,
    reset:nameReset,
    inputFieldClassAssignMent:enteredNameClassAssignMent
  } = useInput(value => value.trim().length > 0);



  const [enteredEmail, setEnteredEmail]= useState('');
  const [enterEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredEmailIsValid = enteredEmail.trim().includes('@');
  const enterEmailIsInvalid = !enteredEmailIsValid && enterEmailTouched;

  const formValid = enteredNameIsValid && enteredEmailIsValid;

  const onEmailChangeHandler= (event) => {
    console.log("Email",event.target.value);
    setEnteredEmail(event.target.value);
    // if(event.target.value.trim().length > 0){
    //   setEnteredNameIsValid(true);
    //   //return
    // }
  }


  const onBlurEmailHandler = (event)=>{
    setEnteredEmailTouched(true);
  }

  const onSubmitHandler = (event)=> {
    event.preventDefault();
    if(!formValid){
      
      return
    }
    
    // const enteredValue = namedInputRef.current.value;
    console.log(event.target.value);
    //Clear the input field on click on submit using State Advisable
    nameReset();
    setEnteredEmail('');
    setEnteredEmailTouched(false);

    //clear the input field on click on submit using ref NOT-ADVISABLE
    // namedInputRef.current.value =''

  }


  const namedInputClasses = enteredNameClassAssignMent('form-control invalid', 'form-control');
  const emailInputClasses = enterEmailIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={namedInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={onChangeNameHandler}  value={enteredName} onBlur={onBlurNameHandler} />
        {enteredNameHasError && <p className="error-text">Input Name cannot be Blanks.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange={onEmailChangeHandler}  value={enteredEmail} onBlur={onBlurEmailHandler} />
        {enterEmailIsInvalid && <p className="error-text">Input Email cannot be Blanks.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
