// import React, {useState,useEffect} from 'react'   //use state ek hook hota hai 
import React, {useState} from 'react'   //use state ek hook hota hai 
export default function TextForm(props) {

  const handleOnChange = (event)=>{
    //This function helps to take input 
    // console.log("On Changed");
    settext(event.target.value)
  }

  const handleUpClick = ()=>{
    // console.log("Upper case was clicked " + text);
    let newText= text.toUpperCase();
    settext(newText)
    props.showAlert("Words converted into upper case!", "success");
  }

  const handleloClick = ()=>{
   //it convert the word in lowercase 
    let newText= text.toLowerCase();
    settext(newText)
    props.showAlert("Words converted into lower case!", "success");
  }

  const handleclClick = ()=>{
// It will clear the app text bar 
    let newText= '';
    settext(newText)
    props.showAlert("Text box  has been cleared! ", "success");
  }

  const handleFcClick = () => {
    //This will convert the first letter capital for each word 
    let words = text.split(' ');
    let newText = words.map(word => {
      if (word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else {
        return word;
      }
    }).join(' ');
    settext(newText);
    props.showAlert("First letter is capitalised!", "success");
  }

  const handleExtraSpaces=()=> {
    let newText=text.split(/[ ]+/);
    settext(newText.join(" "))
    props.showAlert("Extra spaces has been removed! ", "success");
  }
  
  // const [wordCount, setWordCount] = useState(0);
  const [wordCount] = useState(0);
 
  const [text, settext] = useState('');
  // text ="new state"  ////this is wrong way to change the state aise text ka value change nhi hoga 
  //settext("new text")  //correct way is this 

  // useEffect(() => {
  //   // array of words
  //   const words = text.split(' ');

  //   // update word count
  //   let wordCount = 0;
  //   words.forEach((word) => {
  //     if (word.trim() !== '') {
  //       wordCount++;
  //     }
  //   });
  //   setWordCount(wordCount);

  //   // update char count (including whitespaces)
   
  // }, [text])

  return (
  <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="container my-3">
          <textarea className="form-control my-3" value ={text} onChange={handleOnChange} id="myBox" rows="10"></textarea> 
          {/* style={{backgroundColor: props.mode==='dark'?'grey':'light',color: props.mode==='dark'?'white':'black'}} */}
          <button disabled={text.length===0} className="btn btn-secondary mx-1 my-2" onClick={handleFcClick}>Capitalize first letter</button>
          <button disabled={text.length===0} className="btn btn-secondary  mx-1 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-secondary mx-1 my-2" onClick={handleloClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-secondary mx-1 my-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
          <br />
          <button disabled={text.length===0} className="btn btn-outline-success mx-1 my-2" onClick={handleclClick}>Clear text </button>
        </div>
    </div>

    <div className="container my-3">
      <h3>Your text summary</h3>
      {/* <p>{wordCount} words and {text.length} characters</p> */}
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>

      <p>You can read your text in {0.008 * wordCount} Minutes</p>
      
      <h3>Preview</h3>

      {/* ye neeche jo lines hai ? aur : included ye ek condition ki trha hai isko ternary operators bolte */}
      <p>{text.length>0?text:"Enter your text on above text box to preview."}</p>  

    </div>
    

  </>
  )
}
