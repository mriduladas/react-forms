import { useState } from "react";


const SimpleInput = (props) => {
  const [enteredName, setEnteredName]= useState('');

  const onChangeHandler= (event) => {
    console.log(event.target.value);
    setEnteredName(event.target.value);
  }
  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={onChangeHandler}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
