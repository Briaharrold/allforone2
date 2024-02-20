import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useState } from 'react'
import { ReverseItAlpabet } from '../services/DataService';

export default function AddingComponent() {
  const [ word, setWord ] = useState('');
  const [ result, setResult ] = useState('');

  const reverseItAlpabet = async () => {
      const response = await ReverseItAlpabet(word);
      setResult(response);
  }

  return (
    <div>
      <header className='reverseItAlphaBg'>

      <div className='center-items' style={{marginLeft:"5px", marginRight:"5px"}}>
               <h1 className=' pt-5  text-white'>Reverse It Alphabet</h1>
                </div>

                <div className='center-items' style={{marginLeft:"5px", marginRight:"5px"}}>
                   <b> <h4 style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='text-white'>Please type in a Word</h4></b>
                </div>
                <h3 className=' text-center text-white pt-5' style={{ paddingTop: "10px" }}> {"\n"}{result}</h3>
                <div className='center-items gap-5 grid  'style={{ marginTop:"px"}}>
                   
                    <input onChange={ (e) => setWord(e.target.value) } className=''  placeholder='word'></input>
            
                </div>
        
                <div className='center-items mt-5'>
                    <Button className='mt-5 oddBtn' onClick={ () => reverseItAlpabet() } style={{ width: "100px",borderRadius:"100px", overflow: 'hidden'}}> <h5 className='mb-0'>Click</h5></Button>
                </div>


               

            </header>
            
    </div>
    
  )
}