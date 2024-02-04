// LettersContext.js
import React, { createContext, useContext, useState } from "react";
import dummy from "dummy.json";

const LettersContext = createContext();

const useLetters = () => {
    const context = useContext(LettersContext);
    return context;
};

const LettersProvider = ({ children }) => {
    const [letters, setLetters] = useState(dummy);
    const [updateContent, setUpdateContent] = useState();
    const [selectedMember, setSelectedMember] = useState("카리나");

    const contextValue = {
        letters,
        setLetters,
        updateContent,
        setUpdateContent,
        selectedMember,
        setSelectedMember
    };


    return (
        <LettersContext.Provider value={contextValue}>
            {children}
        </LettersContext.Provider>
    );
};


export { LettersProvider, useLetters };
