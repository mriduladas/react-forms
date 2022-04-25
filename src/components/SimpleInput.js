import { useRef, useState } from "react";


const SimpleInput = (props) => {
  const [enteredName, setEnteredName]= useState('');
  //const namedInputRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const onChangeHandler= (event) => {
    console.log(event.target.value);
    setEnteredName(event.target.value);
  }

  const onSubmitHandler = (event)=> {
    event.preventDefault();
    if(enteredName.trim().length === 0){
      setEnteredNameIsValid(false);
      return
    }
    setEnteredNameIsValid(true);
    
    // const enteredValue = namedInputRef.current.value;
    console.log(event.target.value);
    //Clear the input field on click on submit using State Advisable
    setEnteredName('');

    //clear the input field on click on submit using ref NOT-ADVISABLE
    // namedInputRef.current.value =''

  }

  const namedInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid'
  return (
    <form onSubmit={onSubmitHandler}>
      <div className={namedInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={onChangeHandler}  value={enteredName} />
        {!enteredNameIsValid && <p className="error-text">Input Name cannot be Blanks.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
