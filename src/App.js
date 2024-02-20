import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePageComponent from './components/HomePageComponent';
import SayHelloComponent from './components/SayHelloComponent';
import  ReverseItAlpabetComponent from './components/ReverseItAlpabetComponent';
import ReverseItNumericComponent from './components/ReverseItNumericComponent'
import RestPickerComponent from './components/RestPickerComponent'
import OddOrevenComponent from './components/OddOrEvenComponent'
import NameAndTimeComponent from './components/NameAndTimeComponent'
import Magic8BallComponent from './components/MagicEightBallComponent'
import MadLibsComponent from './components/MadLibsComponent'
import GreaterOrLessComponent from './components/GreaterOrLessComponent'
import AddingComponent from './components/AddingComponent';
import NavbarComponentTwo from './components/NavBarComponent';

function App() {
  return (
<div> 

      <BrowserRouter> 
      <NavbarComponentTwo/> 
    <Routes>

      <Route path='/' element={ <HomePageComponent/> } />
      <Route path='sayhello'  element={ <SayHelloComponent/> } />
      <Route path='reverseitnumeric' element={ <ReverseItNumericComponent/> } />
      <Route path='reverseitalphabet' element={ <ReverseItAlpabetComponent/> } />
      <Route path='restpicker' element={ <RestPickerComponent/> } />
      <Route path='oddoreven' element={ <OddOrevenComponent/> } />
      <Route path='nameandtime' element={ <NameAndTimeComponent/> } />
      <Route path='magic8' element={ <Magic8BallComponent/> } />
      <Route path='madlibs' element={ <MadLibsComponent/> } />
      <Route path='greaterorless' element={ <GreaterOrLessComponent/> } />
      <Route path='adding' element={ <AddingComponent/> } />

     
  
      </Routes>
    
    </BrowserRouter> 
    </div>
  );
}

export default App;

