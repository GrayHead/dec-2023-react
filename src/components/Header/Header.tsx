import {FC} from 'react';

import './Header.css';
import {IUseState} from '../../types/useState.type';
import {PageEnum} from '../../constants/page.enum';

interface IProps {
    setChoice: IUseState<PageEnum>
}

const Header: FC<IProps> = ({setChoice}) => {
    return (
        <div className={'Header'}>
            <button onClick={() => setChoice(PageEnum.USERS)}>Users</button>
            <button onClick={() => setChoice(PageEnum.COMMENTS)}>Comments</button>
            <button onClick={() => setChoice(PageEnum.CARS)}>Cars</button>
        </div>
    );
};

export {Header};
