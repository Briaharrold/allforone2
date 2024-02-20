import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useState } from 'react'
import { SayHello } from '../services/DataService';

export default function AddingComponent() {
  const [ name, setName ] = useState('');
  const [ result, setResult ] = useState('');

  const sayHello = async () => {
      const response = await SayHello(name);
      setResult(response);
  }

  return (
    <div>
      <header className='sayHelloBg'>
      <div className='center-items' style={{marginLeft:"5px", marginRight:"5px"}}>
               <h1 className=' pt-5  text-white'>Say Hello</h1>
                </div>

                <div className='center-items' style={{marginLeft:"5px", marginRight:"5px"}}>
                   <b> <h4 style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='text-white'>Please type in your Name</h4></b>
                </div>
                <h3 className=' text-center text-white pt-5' style={{ paddingTop: "10px" }}> {"\n"}{result}</h3>
                <div className='center-items gap-5 grid  'style={{ marginTop:"210px"}}>
                   
                    <input onChange={ (e) => setName(e.target.value) } className='mt-5 mb-4'  placeholder='question'></input>
            
                </div>
        
                <div className='center-items mt-5'>
                    <Button className='mt-5 helloBtn' onClick={ () => sayHello() } style={{ width: "100px",borderRadius:"100px", overflow: 'hidden'}}> <h5 className='mb-0'>Click</h5></Button>
                </div>

               

               

            </header>
            
    </div>
    
  )
}