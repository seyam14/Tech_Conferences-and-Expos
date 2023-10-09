import { Link } from "react-router-dom";


const Errorpage = () => {
    return (
        <div>
            <h2>Oops!!! </h2>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default Errorpage;