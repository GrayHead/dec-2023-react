import {useLocation, Location} from 'react-router-dom';

interface IState<T> extends Location {
    state: T
}

const useAppLocation = <K>(): IState<K> => useLocation();


export {
    useAppLocation
}
