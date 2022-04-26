import useInput from "../hooks/use-input";
import useInputReducer from "../hooks/use-input-reducer";


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

  const {
    enteredValue: enteredEmail,
    enterValueTouched:enterEmailTouched,
    enteredValueIsValid:enteredEmailIsValid,
    hasError:enteredEmailHasError,
    onChangeHandler:onEmailChangeHandler,
    onBlurHandler:onBlurEmailHandler,
    reset:emailReset,
    inputFieldClassAssignMent:enteredEmailClassAssignMent
  } = useInputReducer(value => value.trim().includes('@'));

  const formValid = enteredNameIsValid && enteredEmailIsValid;

  const onSubmitHandler = (event)=> {
    event.preventDefault();
    if(!formValid){
      
      return
    }
    
    // const enteredValue = namedInputRef.current.value;
    console.log(event.target.value);
    //Clear the input field on click on submit using State Advisable
    nameReset();
    emailReset();

    //clear the input field on click on submit using ref NOT-ADVISABLE
    // namedInputRef.current.value =''

  }


  const namedInputClasses = enteredNameClassAssignMent('form-control invalid', 'form-control');
  const emailInputClasses = enteredEmailClassAssignMent('form-control invalid', 'form-control');
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
        {enteredEmailHasError && <p className="error-text">Input Email cannot be Blanks.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
