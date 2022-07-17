//модальное окно выводит изображение, слово, его перевод, транскрипцию, описание
//import React, { useState } from 'react';
//import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import '../../WORDS.json';
import './CardWord.css';


const CardWord = ({active, setActive, children}) => {

    console.log(active);
    
    //console.log(id);
    // const handleClickedLeft = () => {
    //     setNum(id => id - 1);
    //     };

    // const handleClickedRight = () => {
    //     setNum(id => id + 1);
    //     };

    return (

        <div className={active ? "modal__active" : "modal"} onClick={ () => setActive(false) }>
            <div className={active ? "modal__content-active" : "modal__content" } onClick={ e => e.stopPropagation() }>
            <span class="close">&times;</span>
                {children}
                
            </div>
        </div>
        
        // <div className={ active ? "modal__active" : "modal" } onClick={() => setActive(false)}/* чтобы мод.окно закрывалось при нажатии на темн.область*/> 
            
        //     {/* <div className='cardWord__content__gallery'>
        //         <button className='cardWord__gallery__button' onClick={handleClickedLeft}><VscArrowLeft/></button>
        //         <img className='cardWord__gallery__img' src={props.img} alt=""/>
        //         <button className='cardWord__gallery__button' onClick={handleClickedRight}><VscArrowRight/></button>
        //     </div> */}
            
            
        //     <div className={active ? "modal__content-active" : "modal__content"} onClick={e => e.stopPropagation()}/*   чтобы мод.окно не закрывалось при нажатии на контентную часть*/>
        //         <p>ТЕСТ</p>
                
        //     </div>    

        // </div>
        
    )
}

export default CardWord;
