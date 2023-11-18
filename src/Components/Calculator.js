import React,{useState} from 'react'

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState('');

    const validateInput = () => {
        // validating for the empty input
        if (num1.trim() === '' || num2.trim() === '') {
            num1.trim() === ''?setErrorMessage("Num1 Cannot Be Empty"): setErrorMessage('Num2 Cannot Be Empty');
          setResult('');
          setSuccess(false);
          return false;
        }
        // validating for the input that is not number type 
        if (isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) {
          setErrorMessage('Please enter valid numbers.');
          setSuccess(false);
          setResult('');
          return false;
        }
        return true;
      };
    
    function performOperaton(operator){
        // checking validation and then bypassing it for further calculations
         if(!validateInput()){
            return;
         }
         setErrorMessage('');
         setSuccess(true);
         const number1 = parseFloat(num1);
         const number2 = parseFloat(num2);
          if(operator=='+'){
            setResult(number1+number2);
          }
          else if(operator=='-'){
            setResult(number1-number2);
          }
         else if(operator=='*'){
            setResult(number1*number2);
          }
         else if(operator=='/'){
            setResult(number1/number2);
          }
    }
  return (
    <div className='calculatorContainer'>
        <div>
              <input placeholder="Num1" type='text' value={num1} onChange={(event)=>setNum1(event.target.value)}/>
        </div>
        <div>
              <input placeholder="Num2" type= 'text' value={num2} onChange={(event)=>setNum2(event.target.value)} />
        </div>
        <div className="buttonContainer">
            <button onClick={()=>performOperaton('+')}>+</button>
            <button onClick={()=>performOperaton('-')}>-</button>
            <button onClick={()=>performOperaton('*')}>*</button>
            <button onClick={()=>performOperaton('/')}>/</button>
        </div>
        
         {success==true && <p className='successMessageContainer'>Success!</p>}
       
         {success==false && success!=='' && <p className='errorMessageContainer'>Error!</p>}
        
         {errorMessage && <p >{errorMessage}</p>}
         {result!=='' && <p>Result= {result}</p>}
    </div>
  )
}

export default Calculator