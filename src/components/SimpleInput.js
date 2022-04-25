import {useState } from "react";


const SimpleInput = (props) => {
  const [enteredName, setEnteredName]= useState('');
  //const namedInputRef = useRef();
  const [enterNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredEmail, setEnteredEmail]= useState('');
  const [enterEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim().length > 0;
  const enterNameIsInvalid = !enteredNameIsValid && enterNameTouched;

  const enteredEmailIsValid = enteredEmail.trim().includes('@');
  const enterEmailIsInvalid = !enteredEmailIsValid && enterEmailTouched;

  const formValid = enteredNameIsValid && enteredEmailIsValid;

  const onChangeHandler= (event) => {
    console.log("name",event.target.value);
    setEnteredName(event.target.value);
    // if(event.target.value.trim().length > 0){
    //   setEnteredNameIsValid(true);
    //   //return
    // }
  }

  const onEmailChangeHandler= (event) => {
    console.log("Email",event.target.value);
    setEnteredEmail(event.target.value);
    // if(event.target.value.trim().length > 0){
    //   setEnteredNameIsValid(true);
    //   //return
    // }
  }

  const onBlurHandler = (event)=>{
    setEnteredNameTouched(true);
    // if(enteredName.trim().length === 0){
    //   setEnteredNameIsValid(false);
    //   //return
    // }
    //setEnteredNameIsValid(true);
  }

  const onBlurEmailHandler = (event)=>{
    setEnteredEmailTouched(true);
  }

  const onSubmitHandler = (event)=> {
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if(!formValid){
      
      return
    }
    
    // const enteredValue = namedInputRef.current.value;
    console.log(event.target.value);
    //Clear the input field on click on submit using State Advisable
    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);

    //clear the input field on click on submit using ref NOT-ADVISABLE
    // namedInputRef.current.value =''

  }


  const namedInputClasses = enterNameIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = enterEmailIsInvalid ? 'form-control invalid' : 'form-control';
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={namedInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={onChangeHandler}  value={enteredName} onBlur={onBlurHandler} />
        {enterNameIsInvalid && <p className="error-text">Input Name cannot be Blanks.</p>}
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
