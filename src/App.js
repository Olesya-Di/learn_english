import './App.css';

import React, { useState } from 'react';
import WORDS from './components/WORDS.json';
import Dictionary from './components/Dictionary/Dictionary';
import Footer from './components/Footer';
import Header from './components/Header';
//import handleClickCard from './components/topic_page/CardWord/CardWord';
import Words from './components/topic_page/Words/Words';
import CardWord from './components/topic_page/CardWord/CardWord';

function App() {

  const [ modalActive, setModalActive ] = useState(true);

  const handleClickCard = () => {  // при нажатии на карточку
  
    console.log("привет");
    setModalActive(!modalActive);
    
  };

  console.log(modalActive);
  return (
    <div className="App">
      

      <Header/>

      <div className="card">

      {
        WORDS.map((word) => 
            <Words 
            id={word.num}
            word={word.word} 
            translation={word.translation}
            img={word.img}
            openModal={handleClickCard}
            />
        )
      }
      
      </div>
      
      <CardWord active={modalActive} setActive={setModalActive}></CardWord>
      
      {/* {
          WORDS.map((word) => 
          <CardWord
            id={word.num}
            word={word.word} 
            transcription={word.transcription} 
            translation={word.translation}
            img={word.img}
          />
          
          )
        } */}
      
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th colSpan={3}>Действия</th>
          </tr>
        </thead>

        
        {
          WORDS.map((word) => 
          <Dictionary 
            num={word.num} 
            word={word.word} 
            transcription={word.transcription} 
            translation={word.translation}
          />
          
          )
        }
    

      </table>
      <Footer/>
    </div>
);
}

export default App;
