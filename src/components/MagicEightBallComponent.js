import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { MagicEightBall } from '../services/DataService';

export default function AddingComponent() {
  const [ question, questionRender ] = useState('');
  const [ result, setResult ] = useState('');

  const magicEightBall = async () => {
      const response = await MagicEightBall(question,);
      setResult(response);
  }

  return (
    <div>
      <header className='magic8Bg'>
      <div className='center-items' style={{marginLeft:"5px", marginRight:"5px"}}>
               <h1 className=' pt-5  text-black'>Magic 8 Ball</h1>
                </div>

                <div className='center-items' style={{marginLeft:"5px", marginRight:"5px"}}>
                   <b> <h4 style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='text-black'>Please type in your Question</h4></b>
                </div>
                <h3 className=' text-center pt-5' style={{ paddingTop: "10px" }}> {"\n"}{result}</h3>
                <div className='center-items gap-5 grid 'style={{ marginTop:"110px"}}>
                   
                    <input onChange={ (e) => magicEightBall(e.target.value) } className='mt-5'  placeholder='question'></input>
            
                </div>
        
                <div className='center-items '>
                    <Button className='greatBtn' onClick={ () => magicEightBall() } style={{ width: "100px",borderRadius:"100px", overflow: 'hidden'}}> <h5 className='mb-0'>Click</h5></Button>
                </div>

               

               

            </header>
            
    </div>
    
  )
}