import {  useState, useCallback } from 'react';

export const useCounter = () => {
    const [item, setItem] = useState(1);
    const [isShow, setIsShow] = useState(true);
    const handleClick = useCallback(() => {
        if (item < 10) {
            setItem((previtem) => previtem + 1);
        }
        // setItem((item) => item +1);
    }, [item]);

    const handleDisplay = useCallback(() => {
        setIsShow((previsShow) => !previsShow);
    }, []);

    return { item, isShow, handleClick, handleDisplay };
};
