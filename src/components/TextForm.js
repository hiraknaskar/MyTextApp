
import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("UPPERCASE was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlaet("Converted to upper case" , "success" );
    }
    const handleLoClick =()=>{
        console.log("UPPERCASE was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
        props.showAlaet("Converted to lower case" , "success" );
    }
    const handCleClick =()=>{
        console.log("UPPERCASE was clicked" + text);
        let newText= "";
        setText(newText);
        props.showAlaet("Text cleared" , "success" );
    }
    const handleOnChange =(event)=>{
        console.log("On Change");
        setText(event.target.value)

    }
    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlaet("Text copied" , "success" );
    }
    const handleExtraSpaces =()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlaet("Extra space removed" , "success" );
    }
    const [text, setText] = useState('');
    //setText("new text")
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'#062138':'white'}}>
        <h1 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h1>
        <div className="container mb-3 " style={{display: 'flex', justifyContent: 'center'}}>
            <textarea className="from-control" value={text} style={{flexGrow: 1, backgroundColor: props.mode=== 'dark' ? 'rgb(9 42 71)':'white' , color: props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8" ></textarea>
        </div>
        <botton className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</botton>
        <botton className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LOWERCASE</botton>
        <botton className="btn btn-primary mx-2" onClick={handCleClick}>Clear Text</botton>
        <botton className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</botton>
        <botton className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</botton>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} Words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to priview it here"}</p>
    </div>
    </>
  )
}
