import { useState, useCallback, useMemo } from 'react';

export const useCounter = () => {
    const [item, setItem] = useState(1);
    const [isShow, setIsShow] = useState(true);

    const doubleCount = useMemo(() => {
        return item * 2;
    }, [item]);

    const handleClick = useCallback(() => {
        if (item < 10) {
            setItem((previtem) => previtem + 1);
        }
        // setItem((item) => item +1);
    }, [item]);

    const handleDisplay = useCallback(() => {
        setIsShow((previsShow) => !previsShow);
    }, []);

    return { item, doubleCount, isShow, handleClick, handleDisplay };
};
