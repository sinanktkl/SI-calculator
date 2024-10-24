import { TextField } from '@mui/material';
import './App.css'
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const[principle,setPrinciple]=useState(0)
  const[rate,setRate]=useState(0)
  const[year,setYear]=useState(0)
  const[interest,setInterest]=useState(0)
  const[isPrincipleInputValid,setIsPrincipleInputValid]=useState(false)
  
  const[isYearInputValid,setIsYearInputValid]=useState(false)
  const[isRateInputValid,setIsRateInputValid]=useState(false)

      const handleValidation=(tag)=>{

        const {name,value}=tag
        console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
        if(!!value.match(/^\d*.?\d+$/)){
          //valid
          if (name == "principle") {
            setPrinciple(value)
            setIsPrincipleInputValid(false)
          }  else if(name=="year"){
            setYear(value)
            setIsYearInputValid(false)
            
          }else{
            setRate(value)
            setIsRateInputValid(false)
          }
          }
          else{
              //invalid
              if (name=="principle") {
                
                setPrinciple(value)
                setIsPrincipleInputValid(true)
              }
              else if(name=="year"){
                setYear(value)
                setIsYearInputValid(true)
              }
              else{
                setRate(value)
                setIsRateInputValid(true)
              }
            }
          

          }

        const handlecalculate=(e)=>{
        e.preventDefault()
        setInterest((principle*rate*year)/100)
          }
          const handleReset=()=>{
            setYear("")
            setRate("")
            setPrinciple("")
            setInterest("")
            setIsPrincipleInputValid(false)
            setIsYearInputValid(false)
            setIsRateInputValid(false)
          }

          
  return (
    <>

    <div style={{minHeight:"100vh",width:'100%'}} className='d-flex justify-content-center align-items-center bg-primary'>
        <div className='box bg-info p-5 rounded'>
          <h2 className='text-danger fw-bolder' style={{textDecoration:"underline"}}>Simple-Interest-Calculator</h2>
          <p className='text-center'>Calculate your simple interest with us</p>
          <div className='d-flex justify-content-center align-items-center p-5 rounded bg-warning'>
          <h1 className='text-danger'>&#8377; {interest}</h1>
          </div>
        <div className='mt-5'>
          <form className='border rounded p-3 d-flex flex-column p-3'>
                <TextField id="principle" name="principle" value={principle} label="Principle" variant="outlined" onChange={e=>handleValidation(e.target)}/>
                 
                  {isPrincipleInputValid&&<div className="mb-2 text-danger fw-bolder">*Invalid input</div>}
                <TextField id="year" name='year' value={year} label="year" variant="filled" onChange={e=>handleValidation(e.target)}/>
               {isYearInputValid&& <div className="mb-2 text-danger fw-bolder">*Invalid input</div>}
                <TextField id="rate" name='rate' value={rate} label="Rate" variant="standard" onChange={e=>handleValidation(e.target)}/>
                {isRateInputValid&&<div className="mb-2 text-danger fw-bolder">*Invalid input</div>}

          </form>
        </div>
        <div className='mt-3 d-flex justify-content-between'>
                <Button variant="contained" type='submit' onClick={handlecalculate}>Calculate</Button>
                <Button variant="outlined" onClick={handleReset}>Reset</Button>
        </div>
        </div>


      </div>
















    </>
  )
}

export default App
