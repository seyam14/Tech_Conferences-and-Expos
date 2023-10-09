import { Outlet } from "react-router-dom";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";



const Root = () => {
    return (
        <div>
            <div className="max-w-5xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            </div>
            <div className="mt-4 ">
            <Footer></Footer>
            </div>
            
            
        </div>
    );
};

export default Root;