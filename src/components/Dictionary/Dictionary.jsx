// словарь 
import './Dictionary.css';
import React, { useState } from 'react';
import { ImPlus, ImPencil, ImBin } from "react-icons/im";
import { FiSave } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";


function Dictionary(props) {
    
  const [clicked, setClicked] = useState(false);

  const handleClickedState = () => {
    setClicked(!clicked) 
    };
  
  return (
        
  <tbody>
    <tr>
      <td>{props.num}</td>
      <td><input type="text" value={( clicked ? '' : props.word )} onClick={handleClickedState}></input></td>
      <td>{props.transcription}</td>
      <td>{props.translation}</td>
      {/* <td><ImPlus/></td> */}
      <td>{clicked ? <FiSave/> : <ImPencil/>}</td>
      <td>{clicked ? <FaTimes/> : <ImBin/>}</td>
      
    </tr>
    
  </tbody>

    )
}

export default Dictionary;
