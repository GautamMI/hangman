import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import WrongLetters from './components/WrongLetters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';
import Login from './components/SignIn/Login';
import { Register } from './components/SignIn/Register';
import axios from 'axios';

import './App.css';
import { Board } from './components/Board';

 const words = ['quince','number','mask','library','trick','obsolete','reason','broad','authority','cow','watery','fetch','lip','direction','obedient','squash','strip','locket','petite','disappear','dinner','labored','fax'];
 let selectedWord = words[Math.floor(Math.random() * words.length)];
function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showleaderBoard, setShowLeaderBoards] = useState(true);
  //const [words, setWords] = useState([]);

  const fetchData = useCallback(async ()=>{
    try{
      const response =  await axios.get('http://localhost:3001/getWords');
      const wordsList = response.data;  
      console.log(wordsList);
      //setWords(wordsList);
      selectedWord = wordsList[Math.floor(Math.random() * wordsList.length)];     
    }catch(e){
       console.log(e);
    }
    
  },[]);
  
  useEffect(() => {
    if(!words){
      // fetchData();
    }
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  function playAgain() {
    console.log(`the words are ${words}`);
    setPlayable(true);

    // Empty Arrays
    setCorrectLetters([]);
    setWrongLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <>
      <Header />
      <Login/>
      {/* {showleaderBoard && <Board/>} */}
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;