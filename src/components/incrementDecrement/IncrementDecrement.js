import React, {useState} from 'react';

const IncrementDecrement = () => {

    let [counter, setCounter] = useState(0);

    console.log('start');
    const onClickIncrement = () => {
        console.log('increment');
        setCounter(counterPrevState => {
            return ++counterPrevState;
        });
        console.log(counter);
    };
    const onClickDecrement = () => {
        console.log('decrement');
        setCounter(--counter);
        console.log(counter);
    };
    console.log('end before return');

    return (
        <div>
            <h2>value is -> {counter}</h2>


            <button onClick={onClickIncrement}>increment
            </button>

            <button onClick={onClickDecrement}>decrement
            </button>
        </div>
    );
};

export default IncrementDecrement;
