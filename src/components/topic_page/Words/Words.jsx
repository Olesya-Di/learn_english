// компонент слово: содержит слово на английском, слово на русском, картинку
import React, { useState } from 'react';

//import CardWord from '../CardWord/CardWord';
import './Words.css';



function Words(props) {
  
  //const [ active, setActive ] = useState(false); 
  const [ clicked, setClicked ] = useState(false);  // состояние кн.Перевод
  // const [ modalActive, setModalActive ] = useState(true);
  
  
  
  
  const handleClickedState = () => {  // при нажатии на кн.Перевод
    setClicked(!clicked);
  };
  
  return (
    <>

        <div className='card__content'>
          
          <div>
            
            <img className='card__content__img' src={props.img} alt="" />
            <p onClick={props.openModal}>{props.word}</p>
          
          </div>      
          
          <button className="card__content__button" onClick={handleClickedState}>{ clicked ? props.translation : "перевод" }</button>
        
        </div>
        {/* <CardWord active={modalActive} setActive={setModalActive}> */}

        {/* <p>{props.word}</p> */}

        {/* </CardWord> */}
        

    </>

    )
}

export default Words;
