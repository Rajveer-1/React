import React, { useState } from 'react'
//Hooks are used in states this is used to change the state 
export default function TextForm(props) {
    //convert to uppercase
    const convertUpper = () => {
        if(text.length==0){
            alert("First enter the text");
            return;
        }
        let convert = text.toUpperCase();
        // setText(convert);
        setTextOutput(convert);
    }
    //convert to lowercase
    const convertLower = () => {
        if(text.length==0){
            alert("First enter the text");
            return;
        }
        let convert = text.toLowerCase();
        // setText(convert);
        setTextOutput(convert);
    }
    //first character capitalize
    const convertCapitalize = () => {
        if(text.length==0){
            alert("First enter the text");
            return;
        }
        const arr = text.split(" ");
        for (var i = 0; i < arr.length; i++) {
           
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
           
        }
        const str2 = arr.join(" ");
        // setText(str2);
        setTextOutput(str2);
    }
    //count the characters
    const countCharacter = () => {
        if(text.length==0){
            alert("First enter the text");
            return;
        }
        if(text.length==0){
            alert("First enter the text");
            return;
        }
        const arr = text.split("");
        
        console.log(arr.length);
        let length = 0;
        for (var i = 0; i < arr.length; i++) {
            if(arr[i]==" "){
                length--;
            }
            length++;
        }
        // setText(length);
    
        setTextOutput("Length of the characters are ---->"+length);
    }
    //count the number of words
    const countWords = () => {
        if(text.length==0){
            alert("First enter the text");
            return;
        }
        const arr = text.split(" ");
        
        console.log(arr.length);
        let length = 0;
        for (var i = 0; i < arr.length; i++) {
            if(arr[i]==""){
                console.log(arr.length);
                length--;
            }
            // else{
            length++;
        }
        // setText(length);
    
        setTextOutput("Length of the words are -----> "+length);
    }
const copyText=()=>{
if(text.length==0){
    alert("First enter the text");

}else
    navigator.clipboard.writeText(text)
    alert("Your text is copied");

}
    const onChangeHandler = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("")
    const [textOutput, setTextOutput] = useState("")
    return (
        <>
            <h2 >{props.heading}</h2>
            <textarea name="" id="text" cols="88" value={text}onChange={onChangeHandler} rows="10"></textarea>
            <div className="btns">
                <button   className="capital" onClick={convertUpper}>UpperCase</button>
                <button   className="lower" onClick={convertLower}>LowerCase</button>
                <button    className="lower" onClick={convertCapitalize}>Capitalize</button>
                <button    className="lower" onClick={countWords}>Count Words</button>
                <button    className="lower" onClick={countCharacter}>Count Character</button>
                <button     className="lower" onClick={copyText}>Copy Text</button>
            </div>
            <div className="output">
                {textOutput}
            </div>
        </>
    )
}
