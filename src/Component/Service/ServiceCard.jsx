import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ServiceCard = ({Service}) => {
    // eslint-disable-next-line react/prop-types, no-unused-vars
    const {id,name,picture,description} = Service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <Link to={`/Service/${id}`}>
                        <button className="btn btn-primary">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default ServiceCard;