// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'

function App() {
  const [mode,setMode]=useState("Enable green Mode");
  const [bluemode,setBlueMode]=useState("Enable Blue gray Mode");
  const blueRed=()=>{

  
    if(bluemode==="Enable Blue gray Mode"){
      setBlueMode("Enable Periwinkle Mode");
      document.body.style.backgroundColor='#088F8F';
    }
    else{
      setBlueMode("Enable Blue gray Mode");
      document.body.style.backgroundColor='#CCCCFF';
    }
  }
  const togglemode=()=>{

    if(mode==="Enable green Mode"){
      setMode("Enable yellow Mode");
      document.body.style.backgroundColor='green';
    }
    else{
      setMode("Enable green Mode");
      document.body.style.backgroundColor='#cccc00';
    }
  }
  return (
   <>

   <Navbar title="Props" linkText="linkProps" blueRed={blueRed} bluemode={bluemode} mode ={mode} modes={togglemode}/>
  
   <TextForm heading="Write anything what you like" />
   
   </>
  );
}

export default App;
