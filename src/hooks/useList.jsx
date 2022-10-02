import { useState, useEffect } from 'react';

const useList = (initialList = []) => {
    const [stateList, setStateList] = useState(initialList)
    const [isEmpty, setIsEmpty] = useState(true);
    const [sort, setSort] = useState(false);
    const [reverse, setReverse] = useState(false);
    const [list, setList] = useState([]);

    const push = (element) => {
        console.log(`stateList: ${stateList}`)
        element !== '' ?
        setStateList( ( oldValue ) => [...oldValue, element ] )
        : setStateList(stateList)
        console.log(`push: ${element}, stateList: ${stateList}`)
    };

    const remove = (index) => {
        setStateList((oldValue) => oldValue.filter((_, i) => i !== index));
    };

    const reset = () => setStateList([]);
    const Sort = () => !sort && reverse ? setSort(false) : setSort(!sort);
    const Reverse = () => !reverse && sort ? setReverse(false) : setReverse(!reverse)

    useEffect(() => {
        stateList.length !== 0 ? setIsEmpty(false) : setIsEmpty(true);
        setList(stateList)
        if (sort === true) {
            setList(list.sort())
        } else if (reverse === true) {
            setList(list.reverse(''))
        } else {
            setList(stateList)
        }
        
    }, [stateList, sort , reverse, isEmpty, list]);

    // console.log(`"useList" - List:${list}, stateList:${stateList}, isEmpty:${isEmpty}, sort:${sort}, reverse:${reverse}`)
    return {
        list, push, remove, reset, isEmpty, Sort, Reverse
    };
};

export default useList;
