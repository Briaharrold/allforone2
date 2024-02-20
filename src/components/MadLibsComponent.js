import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { MadLibs } from '../services/DataService';
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css';
export default function MadLibsComponent() {

    const [inputA, setinputA] = useState('');
    const [inputB, setinputB] = useState('');
    const [inputC, setinputC] = useState('');
    const [inputD, setinputD] = useState('');
    const [inputE, setinputE] = useState('');
    const [inputF, setinputF] = useState('');
    const [inputG, setinputG] = useState('');
    const [inputH, setinputH] = useState('');
    const [inputI, setinputI] = useState('');
    const [inputJ, setinputJ] = useState('');
    const [result, setResult] = useState('');

    const madLibs = async () => {
        const response = await MadLibs(inputA, inputB, inputC, inputD, inputE, inputF, inputG, inputH, inputI, inputJ);
        setResult(response);
    }

    return (
        <div>
            <header className='madLibsBg'>
            <div className='center-items' style={{marginLeft:"5px", marginRight:"5px",display: "flex",  justifyContent: "center"}}>
               <h1 className=' pt-5  text-white'>MadLib</h1>
                </div>
                <div className='center-items' style={{marginLeft:"5px", marginRight:"5px",display: "flex",  justifyContent: "center"}}>
                   <b> <h4 style={{whiteSpace:"pre-wrap", textAlign:"center"}} className='text-white'>Please type in a Words</h4></b>
                </div>
                <div className='centerFlex' style={{ marginLeft: "5px", marginRight: "5px",display: "flex",  justifyContent: "center" }}>
                    <h2  style={{ whiteSpace: "pre-wrap", textAlign: "center" ,paddingRight:"300px",paddingLeft:"300px"}} className='text-white'>{"\n"}{result}</h2>
                </div>

                <div style={{ display: "flex", justifyContent: "space-evenly"}}>
                    <Row >
                        <Col lg={4} md={12} sm={6} style={{display: "flex",  justifyContent: "center"}}>
                            <input onChange={(e) => setinputA(e.target.value)} className='' type='text' placeholder='adjective'></input>
                        </Col>

                        <Col lg={4} md={4} sm={6} style={{display: "flex",  justifyContent: "center"}}>
                            <input onChange={(e) => setinputB(e.target.value)} className='' type='text' placeholder='noun'></input>
                        </Col>

                        <Col lg={4} md={4} sm={12} style={{display: "flex",  justifyContent: "center"}}>
                            <input onChange={(e) => setinputC(e.target.value)} className='' type='text' placeholder='verb'></input>
                        </Col>
                    </Row>
                </div>

                <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                    <Row>
                        <Col lg={4} md={4} sm={12} style={{display: "flex",  justifyContent: "center"}}>
                            <input onChange={(e) => setinputD(e.target.value)} className='' type='text' placeholder='verb ending in Ing'></input>
                        </Col>

                        <Col lg={4} md={4} sm={12} style={{display: "flex",  justifyContent: "center"}}>
                            <input onChange={(e) => setinputE(e.target.value)} className='' type='text' placeholder='noun(plural)'></input>

                        </Col>

                        <Col lg={4} md={4} sm={12} style={{display: "flex",  justifyContent: "center"}}>
                            <input onChange={(e) => setinputF(e.target.value)} className='' type='text' placeholder='body part'></input>

                        </Col>
                    </Row>
                </div>

                <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                    <Row>
                        <Col lg={4} md={4} sm={12} style={{display: "flex",  justifyContent: "center"}}>
                            <input onChange={(e) => setinputG(e.target.value)} className='' type='text' placeholder='verb ending in Ing'></input>

                        </Col>

                        <Col lg={4} md={4} sm={12} style={{display: "flex",  justifyContent: "center"}}>
                            <input onChange={(e) => setinputH(e.target.value)} className='' type='text' placeholder='verb ending in Ed'></input>

                        </Col>

                        <Col lg={4} md={12} sm={12}style={{display: "flex",  justifyContent: "center"}}>
                            <input onChange={(e) => setinputI(e.target.value)} className='' type='text' placeholder='number'></input>

                        </Col>
                    </Row>
                </div>

                <div style={{ display: "flex", justifyContent: "space-evenly" }}>

                    <Row>
                        <Col lg={6} md={6} sm={12} style={{display: "flex",  justifyContent: "center"}}>
                            <input onChange={(e) => setinputJ(e.target.value)} className='' type='text' placeholder='verb'></input>

                        </Col>
                    </Row>
                    
                </div>
        
<Row>
    <Col>
    <div className='flex center' style={{display: "flex",  justifyContent: "center"}}>
                    <Button onClick={() => madLibs()} style={{ width: "300px" }} className='madlibEnterBtn'> start story </Button>
                </div>
    </Col>


</Row>
               
            </header>
        </div>
    )
}