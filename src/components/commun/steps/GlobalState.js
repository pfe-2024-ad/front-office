import React, { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const useGlobalState = () => useContext(GlobalStateContext);

export const GlobalStateProvider = ({ children }) => {
    
    const [responseGlobal, setResponseGlobal] = useState({similarity: null, nom: null,  prenom: null, dateNaissance: null, cin: null, adresseResidence: null});

    const [numPhone, setNumPhone] = useState(null);

    const [file1, setFile1] = useState();
    const [file2, setFile2] = useState();
    const [file3, setFile3] = useState();
   
    
    return (
        <GlobalStateContext.Provider value={{ responseGlobal, setResponseGlobal, numPhone, setNumPhone, file1, setFile1, file2, setFile2, file3, setFile3}}>
            {children}
        </GlobalStateContext.Provider>
    );
};
