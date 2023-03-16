import React, {useEffect, useState} from 'react';

const InputEdit = ({setInputValue, inputValue}) => {

    const [inInput, setInInput] = useState(inputValue);

    useEffect(() => {
        setInputValue(inInput)
    }, [inInput])

    return (
        <div className={`w-full`}>
            <input
                type="text"
                className={`bg-transparent w-full border-none outline-none`}
                placeholder={'Edit a task'}
                defaultValue={inputValue}
                onInput={(e) => setInInput(e.target.value)}
            />
        </div>
    );
};

export default InputEdit;