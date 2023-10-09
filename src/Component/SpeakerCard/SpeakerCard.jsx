

// eslint-disable-next-line react/prop-types
const SpeakerCard = ({Speaker}) => {

   // eslint-disable-next-line react/prop-types, no-unused-vars
   const {id,name,picture,time,topic_name} = Speaker;
   return (
       <div className="card card-compact bg-base-100 shadow-xl">
           <figure><img src={picture} alt="Shoes" /></figure>
           <div className="card-body">
               <h2 className="card-title">{name}</h2>
               <p>{time}</p>
               <p>{topic_name}</p>
           </div>
       </div>
   );
};

export default SpeakerCard;