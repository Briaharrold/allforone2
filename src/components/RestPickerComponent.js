import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../App.css';
import { useState } from 'react'
import { RestaurantPicker } from '../services/DataService';

export default function AddingComponent() {
  const [ category, setCategory ] = useState('');
  const [ result, setResult ] = useState('');

  const restaurantPicker = async () => {
      const response = await RestaurantPicker(category);
      setResult(response);
  }

  return (
    <div>
      <header className='restBg'>
      <div className='center-items' style={{marginLeft:"5px", marginRight:"5px"}}>
               <h1 className=' pt-5  text-black'> Restaurant Picker</h1>
                </div>

                <div className='center-items' style={{marginLeft:"5px", marginRight:"5px"}}>
                   <b> <h4 style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='text-black'>Please type in a Category(Thai, Seafood or Mexican ).</h4></b>
                </div>
                <div className='center-items gap-5 grid  'style={{ marginTop:"50px",marginBottom:'70px'}}>
                   
                    <input onChange={ (e) => setCategory(e.target.value) } className='mt-5'  placeholder='Thai, Seafood or Mexican '></input>
                    
            
                </div>

        
                <div className='center-items mt-5 '>

                    <Button variant="outline-light" className='mt-5' onClick={ () => restaurantPicker() } style={{ width: "100px",borderRadius:"100px", overflow: 'hidden'}}> <h5 className='mb-0 '>Click</h5></Button>
                </div>

                  <h3 className=' text-center text-black pt-3 mt-3' style={{ paddingTop: "300px" }}> {"\n"}{result}</h3>

               

            </header>
            
    </div>
    
  )
}