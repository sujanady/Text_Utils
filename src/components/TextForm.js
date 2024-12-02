import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to upper case", "Success  ")
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lower case", "Success  ")
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleClear = (event)=>{
        setText('');
        props.showAlert("Text cleared", "Success  ")

    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style = {{color: props.mode === 'light' ? 'black':'white'}}>
            
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnChange} style = {{backgroundColor: props.mode === 'light' ? 'white':'grey', color: props.mode === 'light' ? 'black':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear text</button>
    </div>
    
    <div className="container my-3" style = {{color: props.mode === 'light' ? 'black':'white'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length} Minutes read</p>
    </div>
    </>
        
    )
}