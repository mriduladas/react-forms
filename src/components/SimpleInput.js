import { useRef, useState } from "react";


const SimpleInput = (props) => {
  const [enteredName, setEnteredName]= useState('');
  const namedInputRef = useRef();

  const onChangeHandler= (event) => {
    console.log(event.target.value);
    setEnteredName(event.target.value);
  }

  const onSubmitHandler = (event)=> {
    event.preventDefault();
    const enteredValue = namedInputRef.current.value;
    console.log(enteredValue);
    //Clear the input field on click on submit using State Advisable
    //setEnteredName('');

    //clear the input field on click on submit using ref NOT-ADVISABLE
    namedInputRef.current.value =''

  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={onChangeHandler} ref={namedInputRef}  />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
