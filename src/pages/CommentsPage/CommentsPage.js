import {Comments} from "../../components/Comments/Comments";
import {Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
           <Comments/>
        </div>
    );
};

export {CommentsPage};
