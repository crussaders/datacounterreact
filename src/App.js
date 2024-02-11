import { useState } from 'react';
import './App.css';

function App() {
  return (
<>
<Step />

</>
  );
}

function Step() {

  const [step, setStep] = useState(1);

  function increase () {
    return setStep((s) => s + 1); 
  
  }

  function decrease () {
    if (step > 1) {  return setStep((s) => s - 1); }
  }


  return (
    <>
    <div className="step">
      <button onClick={decrease}>-</button>
      <p>Step : {step}</p>
      <button onClick={increase}>+</button>
    </div>
    <Counter step={step}/>
    </>
  );

}

function Counter({step}) {
  const [count, setCount] = useState(0);
  // setting the date
  const date = new Date();
  date.setDate(date.getDate() + count);

  function increase () {
    return setCount((c) => c + step); 
  
  }

  function decrease () {
    return setCount((c) => c - step); 
  }



  return (
    <>
    <div className='counter'>
    <button onClick={
      decrease}>-</button>
      <p>Count: {count}</p>
      <button onClick={increase}>+</button>
      
    </div>
    <p className='date'>{count === 0 ? " Today is " : `${count} days from today is `}{date.toDateString()}</p>
    </>
  );
}

export default App;
