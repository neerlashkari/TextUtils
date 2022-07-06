import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpClick =()=>{
    // console.log("Uppercase Button Clicked!!" + text)
    let upperCase = text.toUpperCase();
    setText(upperCase)
    props.showAlert("Converted to uppercase!!","success");
  }

  const handleLowClick =()=>{
    // console.log("Lowercase Button Clicked!!" + text)
    let lowerCase = text.toLowerCase();
    setText(lowerCase)
    props.showAlert("Converted to lowercase!!","success");
  }

  const handleClearClick =()=>{
    // console.log("Lowercase Button Clicked!!" + text)
    let clearText = "";
    setText(clearText)
    props.showAlert("Text cleared","info");
  }

  const handleCopy =()=>{
    console.log("Copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","info");
  }

  const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces successfully","success");
  }

  const handleOnChange =(event)=>{
    // console.log("OnChange!!")
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'#2a2a2c':'white', color:props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-warning mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-secondary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear Text</button>


    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
