import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useState } from 'react'
import { NameTime } from '../services/DataService';

export default function AddingComponent() {
  const [ name, setName ] = useState('');
  const [ time, setTime ] = useState(0);
  const [ result, setResult ] = useState('');

  const nameTime = async () => {
      const response = await NameTime(name, time);
      setResult(response);
  }

  return (
    <div>
      <header className='nAndTimeBg'>
      <div className='center-items' style={{marginLeft:"5px", marginRight:"5px"}}>
               <h1 className='text-black pt-5'>Time You Woke Up</h1>
                </div>

                <div className='center-items' style={{marginLeft:"5px", marginRight:"5px"}}>
                   <b> <h4 style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='text-black pb-5'>Please type in your name and what time you woke up this morning. <br></br> numbers.</h4></b>
                </div>
                <h3 className='addResult text-center text-black ' style={{ }}> {"\n"}{result}</h3>
                <div className='center-items gap-5 grid mt-5 pt-5'style={{ marginTop:"50px"}}>
                    <input onChange={ (e) => setName(e.target.value) } style={{ marginRight: "10px"}} className='mt-5'  placeholder='name'></input>
                   
                    <input onChange={ (e) => setTime(e.target.value) } className='mt-5'  placeholder='time'></input>
            
                </div>
        
                <div className='center-items '>
                    <Button className='nAndTimeBtn' onClick={ () => nameTime() } style={{ width: "100px",borderRadius:"100px", overflow: 'hidden'}}> <h5 className='mb-0'>Click</h5></Button>
                </div>

               

               

            </header>
            
    </div>
    
  )
}