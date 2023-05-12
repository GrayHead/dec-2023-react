import {memo} from "react";

const Todos = memo(({todos, addTodo}) => {
    console.log('Todos');
    return (
        <div>
            {todos.map((todo, index) => <div key={index}>{todo}</div>)}
            <button onClick={addTodo}>addTodo</button>
        </div>
    );
});

export {Todos};
