import { useState } from 'react';

const useList = (initialValue = []) => {
    const [value, setValue] = useState (initialValue);

    // Push new value to list
    const push = (element) => {
        setValue( ( oldValue ) => [...oldValue, element ] );
    };

    // Remove value from list
    const remove = (index) => {
        setValue((oldValue) => oldValue.filter((_, i) => i !== index));
    };

    // List is Empty ? true / false
    const isEmpty = () => value.length === 0;
    
    const reset = () => setValue([]);

    const sort = () => {
        const desordenada = value
        const ordenada = desordenada.sort((a,b) => a - b)
        setValue(ordenada)
    };

    const reverse = () => {
        const normal = value
        const reverse = normal.reverse('')
        setValue(reverse)
        console.log(`normal: ${normal} - reverse${reverse} useList`)
    };

    return {
        value, push, remove, isEmpty, reset, sort, reverse
    };
};

export default useList;
