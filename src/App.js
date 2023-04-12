import './App.css'
import Comments from "./components/comments/Comments";
import FullComment from "./components/fullComment/FullComment";
import {useState} from "react";


const App = () => {

    let [chosenComment, setChosenComment] = useState(null);
    const lift = (obj) => {
        setChosenComment({...obj});
    }

    return (
        <div className={'container'}>

            {/*<IncrementDecrement/>*/}
            <div className={'leftSide'}>
                <Comments lift={lift}/>

            </div>

            {
                chosenComment
                &&
                (
                    <div className="rightSide">
                        <FullComment value={chosenComment}/>
                    </div>
                )


            }
        </div>

    );

}


export default App;
