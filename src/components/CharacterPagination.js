import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const CharacterPagination = () => {
    const {prevPage, nextPage} = useSelector(state => state.characters);
    const [,setQuery] = useSearchParams();
    const prev = () => {
        setQuery(prev1 => ({...prev1, page:+prev1.get('page')-1}))
    }
    const next = ()=>{
        setQuery(prev1 => ({...prev1, page:+prev1.get('page')+1}))
    }
    return (
        <div>
            <button disabled={!prevPage} onClick={prev}>prev</button>
            <button disabled={!nextPage} onClick={next}>next</button>
        </div>
    );
};

export {CharacterPagination};
