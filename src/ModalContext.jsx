import React, { useState } from 'react';

const ModalContext = React.createContext();

  function ModalContextProvider(props) {

    const [ modalActive, setModalActive ] = useState(false);
    function activeModal() {
      setModalActive(prevState => ( prevState === ""))
    }
  
  }