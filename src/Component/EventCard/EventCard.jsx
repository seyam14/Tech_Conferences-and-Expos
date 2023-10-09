
// eslint-disable-next-line react/prop-types
const EventCard = ({Event}) => {
   // eslint-disable-next-line react/prop-types, no-unused-vars
   const {id,name,picture,description} = Event;
   return (
       <div className="card card-compact bg-base-100 shadow-xl">
           <figure><img src={picture} alt="Shoes" /></figure>
           <div className="card-body">
               <h2 className="card-title">{name}</h2>
               <p>{description}</p>
           </div>
       </div>
   );
};

export default EventCard;