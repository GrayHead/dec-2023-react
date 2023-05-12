import {Todos} from "./Todos";
import {useCallback, useEffect, useState} from "react";

const UseCallBack = () => {
    const [todos, setTodos] = useState(['newTodo']);
    const [count, setCount] = useState(0);

    const addTodo = useCallback(() => {
        setTodos(prevState => [...prevState, 'newTodo'])
    }, [])


    return (
        <div className={count>5?'.one':'.two'}>
            <Todos todos={todos} addTodo={addTodo}/>
            <div>Count: {count}</div>
            <button onClick={()=>setCount(prevState => ++prevState)}>inc</button>
        </div>
    );
};

export {UseCallBack};
