import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useState } from 'react'
import { GreaterThanOrLess } from '../services/DataService';

export default function AddingComponent() {
  const [ numOne, setNumOne ] = useState(0);
  const [ numTwo, setNumTwo ] = useState(0);
  const [ result, setResult ] = useState('');

  const greaterOrLess = async () => {
      const response = await GreaterThanOrLess(numOne, numTwo);
      setResult(response);
  }

  return (
    <div>
      <header className='greatOrLessBg'>
      <div className='center-items' style={{marginLeft:"5px", marginRight:"5px"}}>
               <h1 className='text-white pt-5'>Greater Than Or Less Than</h1>
                </div>

                <div className='center-items' style={{marginLeft:"5px", marginRight:"5px"}}>
                   <b> <h4 style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='text-white'>Please type in two <br></br> numbers.</h4></b>
                </div>
                <h3 className='addResult text-center text-white pt-5' style={{ paddingTop: "10px" }}> {"\n"}{result}</h3>
                <div className='center-items gap-5 grid 'style={{ marginTop:"110px"}}>
                    <input onChange={ (e) => setNumOne(e.target.value) } style={{ marginRight: "10px"}} className='mt-5'  placeholder=' number'></input>
                   
                    <input onChange={ (e) => setNumTwo(e.target.value) } className='mt-5'  placeholder=' number'></input>
            
                </div>
        
                <div className='center-items '>
                    <Button className='greatBtn' onClick={ () => greaterOrLess() } style={{ width: "100px",borderRadius:"100px", overflow: 'hidden'}}> <h5 className='mb-0'>Click</h5></Button>
                </div>

               

               

            </header>
            
    </div>
    
  )
}