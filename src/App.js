import {Button} from "./Button/Button";
import {useContext} from "react";
import {Context} from "./index";
import {First} from "./First";

const App = () => {
    const context = useContext(Context);
    context.users = ['max', 'kokos', 'kesha']
    return (
        <div>
            {/*<Button bgColor={'red'} styles={{color:'blue'}} height={'50px'} id={1234}>*/}
            {/*    save*/}
            {/*</Button>*/}
            {/*<Button bgColor={'black'} styles={{color:'snow'}}>update</Button>*/}
            <First/>
        </div>
    );
};

export default App;
