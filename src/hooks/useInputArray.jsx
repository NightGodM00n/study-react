import {  useState, useCallback } from 'react';

export const useInputArray = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);

    const handleChange = useCallback((e) => {
        if (e.target.value.length > 5) {
            alert("error");
            return;
        }
        setText(e.target.value.trim());
    }, []);

    const handleAdd = useCallback(() => {
        setArray((prevArray) => {
            if (prevArray.some((item) => item === text)) {
                alert("same");
                return prevArray;
            }
            return [...prevArray, text];
        });
    }, [text]);

    return { text, array, handleChange, handleAdd };
};
