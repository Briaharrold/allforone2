import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Adding } from '../services/DataService';

export default function AddingComponent() {
    // <NavbarComponent/>
  const [ numOne, setNumOne ] = useState(0);
  const [ numTwo, setNumTwo ] = useState(0);
  const [ result, setResult ] = useState('');

  const adding = async () => {
      const response = await Adding(numOne, numTwo);
      setResult(response);
  }

  return (
    <div>
      <header className='addingBg'>
      <div className='center-items' style={{marginLeft:"5px", marginRight:"5px"}}>
               <h1> Add Two Numbers</h1>
                </div>

                <div className='center-items' style={{marginLeft:"5px", marginRight:"5px"}}>
                   <b> <h4 style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='addResult'>Please type Numbers</h4></b>
                </div>

                <div className='center-items gap-4'>
                    <input onChange={ (e) => setNumOne(e.target.value) } style={{ marginRight: "10px" }} className='addInput'  placeholder=' number'></input>
                    <input onChange={ (e) => setNumTwo(e.target.value) } className='addInput'  placeholder=' number'></input>
                </div>
         <h3 className='addResult text-center' style={{ paddingTop: "130px" }}> {"\n"}{result}</h3>
                <div className='center-items '>
                    <Button className='addBtn' onClick={ () => adding() } style={{ width: "100px",borderRadius:"100px", overflow: 'hidden'}}> <h5 className='mb-0'>Click</h5></Button>
                </div>

               

               

            </header>
            
    </div>
    
  )
}
