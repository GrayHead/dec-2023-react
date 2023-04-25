import {Users} from "./components/Users";
import {useEffect, useState} from "react";
import {Posts} from "./components/Posts";

const App = () => {

    const [flag, setFlag] = useState(true);




    return (
        <>
            <div>
                <Posts flag={flag}/>
                <button onClick={() => setFlag(prevState => !prevState)}>hide</button>
            </div>
        </>
    );
};

export default App;
