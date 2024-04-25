import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define types for the state
interface ResponseGlobal {
    nom: string ;
    prenom: string ;
    dateNaissance: string ;
    cin: string ;
    adresseResidence: string ;
}

// Define types for the context value
interface GlobalState {
    responseGlobal: ResponseGlobal;
    setResponseGlobal: React.Dispatch<React.SetStateAction<ResponseGlobal>>;
    numPhone: string;
    setNumPhone: React.Dispatch<React.SetStateAction<string>>;
    file1: File | undefined;
    setFile1: React.Dispatch<React.SetStateAction<File | undefined>>;
    file2: File | undefined;
    setFile2: React.Dispatch<React.SetStateAction<File | undefined>>;
    file3: File | undefined;
    setFile3: React.Dispatch<React.SetStateAction<File | undefined>>;
}

// Create context
const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

// Custom hook for using global state
export const useGlobalState = (): GlobalState => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};

interface GlobalStateProviderProps {
    children: ReactNode;
}
export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
    const [responseGlobal, setResponseGlobal] = useState<ResponseGlobal>({
        nom: '',
        prenom: '',
        dateNaissance: '',
        cin: '',
        adresseResidence: ''
    });

    const [numPhone, setNumPhone] = useState<string >('');

    const [file1, setFile1] = useState<File >();
    const [file2, setFile2] = useState<File >();
    const [file3, setFile3] = useState<File >();

    return (
        <GlobalStateContext.Provider value={{ responseGlobal, setResponseGlobal, numPhone, setNumPhone, file1, setFile1, file2, setFile2, file3, setFile3 }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

