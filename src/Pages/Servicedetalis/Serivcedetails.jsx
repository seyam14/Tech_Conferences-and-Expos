import { useLoaderData, useParams } from "react-router-dom";


const Serivcedetails = () => {
    const Serivces = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const Serivce = Serivces.find(Serivce => Serivce .id === idInt);
    console.log(Serivce ); 



    return (
        <div>
            <div className="grid gap-4 md:grid-cols-4">
                <div className=" md:col-span-3">
                    <h2 className="text-4xl text-center mb-3">Details coming here</h2>
                    <img src={Serivce.picture} alt="" />
                    <h2 className="text-2xl">Serivce  Details of: {Serivce.name}</h2>
                    <p>{Serivce.description}</p>
                    
                </div>
                
            </div>
        </div>
    );
};


export default Serivcedetails;