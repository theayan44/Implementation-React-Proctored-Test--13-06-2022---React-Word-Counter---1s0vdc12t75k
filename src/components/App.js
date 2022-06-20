import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

  const [charLimit, setCharLimit] = useState(50);
  const [fontSize, setFontSize] = useState(16);
  const [wordCpunt, setWordCount] = useState(0);
  const [charCpunt, setcharCount] = useState(0);

  const handleTextarea = (e) =>{
    const text = e.target.value;

    //set total word
    let totalWord = 0;
    if(text.length > 0)
      totalWord =  text.trim().split(" ").length;
    setWordCount(totalWord);

    //set total char
    setcharCount(text.length);
  }

  const handleFontSize = (e) =>{
    setFontSize(e.target.value);
  }

  const handleCharLimit = (e) =>{
    setCharLimit(e.target.value);
  }

  return (
    <div id="main">
      <p>Font size picker</p>
      <input type="range" id="fontSize-input" min="16" max="32" step="1" onChange={handleFontSize} />
      <br/>

      <p>Word limit input</p>
      <input id="char-limit-input" type="number" value={charLimit} onChange={handleCharLimit} />
      <br/><br/>

      <textarea style={{fontSize: fontSize + 'px'}} onChange={handleTextarea} maxLength={charLimit}></textarea>

      <div id="word-counter">
        Total number of words written {wordCpunt}
      </div>
      <br/><br/>

      <div id="char-counter">
        Total number of characters used {charCpunt}
      </div>
    </div>
  )
}


export default App;
