import {useForm} from "react-hook-form";

const Cats = ({stateDispatch}) => {
    const {reset, register, handleSubmit} = useForm();
    const [{cats}, dispatch] = stateDispatch;

    const saveCat = (cat) => {
        dispatch({type:'ADD_CAT', payload:cat})
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveCat)}>
                <input type="text" placeholder={'cat'} {...register('name')}/>
                <button>save</button>
            </form>
            {cats.map(cat=><div key={cat.id}>{cat.name} <button onClick={()=>dispatch({type:'DEL_CAT', payload:cat.id})}>Delete</button></div>)}
        </div>
    );
};

export {Cats};
